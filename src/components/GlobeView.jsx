import { useRef, useEffect, useState } from 'react'
import Globe from 'react-globe.gl'

const EARTH_TEXTURE = 'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
const EARTH_BUMP    = 'https://unpkg.com/three-globe/example/img/earth-topology.png'

export default function GlobeView({ points = [], onCityHover, onCityClick }) {
  const globeRef = useRef()
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
  }, [])

  // Active cities get a pulsing ring layer
  const activePoints = points.filter(p => p.active)

  return (
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

      // Base dots for ALL cities
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

      // Pulsing rings for active prayer cities
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
  )
}
