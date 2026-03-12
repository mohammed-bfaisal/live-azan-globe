import { useRef, useEffect, useState, useCallback } from 'react'
import Globe from 'react-globe.gl'
import { PRAYER_COLORS } from '../hooks/usePrayerTimes'

const EARTH_TEXTURE = null
const EARTH_BUMP    = 'https://unpkg.com/three-globe/example/img/earth-topology.png'
const COUNTRIES_URL = 'https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson'

export default function GlobeView({ points = [], hoveredCity = null, onCityHover, onCityClick }) {
  const globeRef     = useRef()
  const [isRotating, setIsRotating]   = useState(true)
  const [altitude, setAltitude]         = useState(2.2)
  const [countries,  setCountries]    = useState([])
  const [dimensions, setDimensions]   = useState({
    width:  window.innerWidth,
    height: window.innerHeight,
  })

  // Load countries GeoJSON once
  useEffect(() => {
    fetch(COUNTRIES_URL)
      .then(r => r.json())
      .then(data => setCountries(data.features))
      .catch(console.error)
  }, [])

  useEffect(() => {
    const onResize = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (!globeRef.current) return
    const controls = globeRef.current.controls()
    controls.autoRotate      = true
    controls.autoRotateSpeed = 0.5
    controls.enableDamping   = true
    controls.dampingFactor   = 0.1
    controls.minDistance     = 50
    controls.maxDistance     = 2000
    globeRef.current.pointOfView({ lat: 20, lng: 40, altitude: 2.2 }, 0)

    const trackAlt = () => {
      const pov = globeRef.current.pointOfView()
      setAltitude(pov.altitude)
    }
    controls.addEventListener('change', trackAlt)
    const canvas = globeRef.current.renderer().domElement
    const stop = () => { controls.autoRotate = false; setIsRotating(false) }
    canvas.addEventListener('pointerdown', stop)
    canvas.addEventListener('wheel', stop)
    return () => {
      canvas.removeEventListener('pointerdown', stop)
      canvas.removeEventListener('wheel', stop)
      controls.removeEventListener('change', trackAlt)
    }
  }, [])

  const toggleRotate = () => {
    if (!globeRef.current) return
    const newVal = !isRotating
    globeRef.current.controls().autoRotate = newVal
    setIsRotating(newVal)
  }

  // Determine which country is hovered based on city ISO code
  const hoveredISO   = hoveredCity?.country || null
  const hoveredColor = hoveredCity ? PRAYER_COLORS[hoveredCity.prayer] || '#a8d8ff' : null

  const getPolygonColor = useCallback((feat) => {
    if (!hoveredISO) return 'rgba(0,0,0,0)'
    const iso = feat.properties.ISO_A2
    if (iso === hoveredISO) return hoveredColor + '55'
    return 'rgba(0,0,0,0)'
  }, [hoveredISO, hoveredColor])

  const getStrokeColor = useCallback((feat) => {
    if (!hoveredISO) return false
    const iso = feat.properties.ISO_A2
    if (iso === hoveredISO) return hoveredColor
    return false
  }, [hoveredISO, hoveredColor])

  const activePoints = points.filter(p => p.active)

  return (
    <>
      <Globe
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}

        globeImageUrl={null}
        tilesUrl='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'

        showAtmosphere={true}
        atmosphereColor="#1a4a8a"
        atmosphereAltitude={0.18}
        showGraticules={false}

        // Country highlight layer
        polygonsData={countries}
        polygonGeoJsonGeometry={d => d.geometry}
        polygonCapColor={getPolygonColor}
        polygonSideColor={() => 'rgba(0,0,0,0)'}
        polygonStrokeColor={getStrokeColor}
        polygonAltitude={0.006}
        polygonsTransitionDuration={300}

        // City dots
        pointsData={points}
        pointLat={d => d.lat}
        pointLng={d => d.lon}
        pointColor={d => d.color}
        pointAltitude={d => d.active ? 0.02 : 0.003}
        pointRadius={d => d.active ? Math.max(0.08, 0.45 * (altitude / 2.2)) : Math.max(0.04, 0.15 * (altitude / 2.2))}
        pointResolution={10}
        pointsMerge={false}
        onPointHover={onCityHover}
        onPointClick={onCityClick}

        // Azan pulse rings
        ringsData={activePoints}
        ringLat={d => d.lat}
        ringLng={d => d.lon}
        ringColor={d => t => d.color + Math.round((1 - t) * 255).toString(16).padStart(2, '0')}
        ringMaxRadius={Math.max(0.8, 3.5 * (altitude / 2.2))}
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
