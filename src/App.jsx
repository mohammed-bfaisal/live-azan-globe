import { useState, useCallback } from 'react'
import './index.css'
import GlobeView from './components/GlobeView'
import Header from './components/Header'
import Legend from './components/Legend'
import CityTooltip from './components/CityTooltip'
import { usePrayerTimes } from './hooks/usePrayerTimes'

export default function App() {
  const { cityData, counts } = usePrayerTimes()
  const [tooltip, setTooltip] = useState({ city: null, x: 0, y: 0 })

  const handleCityHover = useCallback((city, _prev, event) => {
    if (!city) {
      setTooltip({ city: null, x: 0, y: 0 })
      return
    }
    setTooltip({ city, x: event?.clientX ?? 0, y: event?.clientY ?? 0 })
  }, [])

  const handleMouseMove = useCallback((e) => {
    if (tooltip.city) {
      setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }))
    }
  }, [tooltip.city])

  return (
    <div
      className="w-screen h-screen bg-[#010408] overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      <GlobeView
        points={cityData}
        onCityHover={handleCityHover}
        onCityClick={(city) => city && setTooltip(prev => ({ ...prev, city }))}
      />
      <Header />
      <Legend counts={counts} />
      <CityTooltip city={tooltip.city} x={tooltip.x} y={tooltip.y} />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(1,4,8,0.7) 100%)'
        }}
      />
    </div>
  )
}
