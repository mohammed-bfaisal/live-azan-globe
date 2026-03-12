import { useRef, useEffect, useState } from 'react'
import Globe from 'react-globe.gl'

const EARTH_TEXTURE = 'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
const EARTH_BUMP    = 'https://unpkg.com/three-globe/example/img/earth-topology.png'

export default function GlobeView({ points = [], onCityHover, onCityClick }) {
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
    const stop = () => {
      controls.autoRotate = false
      setIsRotating(false)
    }
    canvas.addEventListener('pointerdown', stop)
    canvas.addEventListener('wheel', stop)
    return () => {
      canvas.removeEventListener('pointerdown', stop)
      canvas.removeEventListener('wheel', stop)
    }
  }, [])

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
          background: isRotating ? 'rgba(168,216,255,0.1)' : 'rgba(255,255,255,0.04)',
          borderColor: isRotating ? 'rgba(168,216,255,0.4)' : 'rgba(255,255,255,0.1)',
          color: isRotating ? '#a8d8ff' : '#475569',
        }}
      >
        <span>{isRotating ? '⏸' : '▶'}</span>
        <span>{isRotating ? 'Pause' : 'Rotate'}</span>
      </button>
    </>
  )
}
