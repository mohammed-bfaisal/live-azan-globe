import { useRef, useEffect, useState, useMemo } from 'react'
import Globe from 'react-globe.gl'
import * as THREE from 'three'
import { PRAYER_COLORS } from '../hooks/usePrayerTimes'

const EARTH_TEXTURE = 'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
const EARTH_BUMP    = 'https://unpkg.com/three-globe/example/img/earth-topology.png'

// Convert lon range to Three.js wedge mesh sitting on sphere surface
function makeZoneMesh(lonStart, lonEnd, color) {
  const R = 100 // globe radius in three-globe units
  const ALTITUDE = 0.005

  const startRad = (lonStart * Math.PI) / 180
  const endRad   = (lonEnd   * Math.PI) / 180
  const midRad   = (startRad + endRad) / 2
  const spanRad  = Math.abs(endRad - startRad)

  // Use a thin box geometry scaled to cover the longitude band
  const segments = Math.max(2, Math.round(spanRad * 20))
  const geometry = new THREE.BufferGeometry()

  const vertices = []
  const indices  = []

  // Build a quad strip along the sphere surface for this lon band
  const LAT_STEPS = 36
  for (let i = 0; i <= segments; i++) {
    const lon = startRad + (i / segments) * (endRad - startRad)
    for (let j = 0; j <= LAT_STEPS; j++) {
      const lat = -Math.PI / 2 + (j / LAT_STEPS) * Math.PI
      const r = R * (1 + ALTITUDE)
      const x = r * Math.cos(lat) * Math.sin(lon)
      const y = r * Math.sin(lat)
      const z = r * Math.cos(lat) * Math.cos(lon)
      vertices.push(x, y, z)
    }
  }

  for (let i = 0; i < segments; i++) {
    for (let j = 0; j < LAT_STEPS; j++) {
      const a = i * (LAT_STEPS + 1) + j
      const b = a + LAT_STEPS + 1
      indices.push(a, b, a + 1)
      indices.push(b, b + 1, a + 1)
    }
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
  geometry.setIndex(indices)
  geometry.computeVertexNormals()

  const mat = new THREE.MeshBasicMaterial({
    color: new THREE.Color(color),
    transparent: true,
    opacity: 0.18,
    side: THREE.FrontSide,
    depthWrite: false,
  })

  return new THREE.Mesh(geometry, mat)
}

export default function GlobeView({ points = [], zones = {}, visibleZones = {}, onCityHover, onCityClick }) {
  const globeRef = useRef()
  const [isRotating, setIsRotating] = useState(true)
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const onResize = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (!globeRef.current) return
    const controls = globeRef.current.controls()
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.5
    controls.enableDamping = true
    controls.dampingFactor = 0.1
    controls.minDistance = 150
    controls.maxDistance = 700
    globeRef.current.pointOfView({ lat: 20, lng: 40, altitude: 2.2 }, 0)

    const canvas = globeRef.current.renderer().domElement
    const stop = () => { controls.autoRotate = false; setIsRotating(false) }
    canvas.addEventListener('pointerdown', stop)
    canvas.addEventListener('wheel', stop)
    return () => {
      canvas.removeEventListener('pointerdown', stop)
      canvas.removeEventListener('wheel', stop)
    }
  }, [])

  // Build custom Three.js zone meshes
  const zoneObjects = useMemo(() => {
    const group = new THREE.Group()
    Object.entries(zones).forEach(([prayer, ranges]) => {
      if (!visibleZones[prayer]) return
      const color = PRAYER_COLORS[prayer]
      ranges.forEach(({ lonStart, lonEnd }) => {
        group.add(makeZoneMesh(lonStart, lonEnd, color))
      })
    })
    return group
  }, [zones, visibleZones])

  const toggleRotate = () => {
    if (!globeRef.current) return
    const newVal = !isRotating
    globeRef.current.controls().autoRotate = newVal
    setIsRotating(newVal)
  }

  const activePoints = points.filter(p => p.active)

  return (
    <>
      <Globe
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}

        globeImageUrl={EARTH_TEXTURE}
        bumpImageUrl={EARTH_BUMP}

        showAtmosphere={true}
        atmosphereColor="#1a4a8a"
        atmosphereAltitude={0.18}

        showGraticules={false}

        // Zone overlays via custom Three.js objects
        customLayerData={[{ id: 'zones' }]}
        customThreeObject={() => zoneObjects}
        customThreeObjectUpdate={() => {}}

        // City dots
        pointsData={points}
        pointLat={d => d.lat}
        pointLng={d => d.lon}
        pointColor={d => d.color}
        pointAltitude={d => d.active ? 0.02 : 0.003}
        pointRadius={d => d.active ? 0.45 : 0.15}
        pointResolution={10}
        pointsMerge={false}
        onPointHover={onCityHover}
        onPointClick={onCityClick}

        // Azan pulse rings
        ringsData={activePoints}
        ringLat={d => d.lat}
        ringLng={d => d.lon}
        ringColor={d => t => `${d.color}${Math.round((1 - t) * 255).toString(16).padStart(2, '0')}`}
        ringMaxRadius={3.5}
        ringPropagationSpeed={1.5}
        ringRepeatPeriod={800}
        ringAltitude={0.001}

        backgroundColor="#010408"
      />
      <button
        onClick={toggleRotate}
        className="absolute bottom-8 right-8 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase transition-all duration-200 border"
        style={{
          background:  isRotating ? 'rgba(168,216,255,0.1)' : 'rgba(255,255,255,0.04)',
          borderColor: isRotating ? 'rgba(168,216,255,0.4)' : 'rgba(255,255,255,0.1)',
          color:       isRotating ? '#a8d8ff' : '#475569',
        }}
      >
        <span>{isRotating ? '⏸' : '▶'}</span>
        <span>{isRotating ? 'Pause' : 'Rotate'}</span>
      </button>
    </>
  )
}
