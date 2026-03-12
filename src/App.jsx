import { useState, useCallback } from 'react'
import './index.css'
import GlobeView    from './components/GlobeView'
import Header       from './components/Header'
import Legend       from './components/Legend'
import PrayerToggle from './components/PrayerToggle'
import CityTooltip  from './components/CityTooltip'
import { usePrayerTimes } from './hooks/usePrayerTimes'

// TODO: Prayer zone texture overlay — needs rework. Set to true when ready to fix.
const ZONES_ENABLED = false

// TODO: Prayer zone toggle sidebar — re-enable when ZONES_ENABLED is true.
const SIDEBAR_ENABLED = false

const ALL_PRAYERS     = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha']
const DEFAULT_VISIBLE = Object.fromEntries(ALL_PRAYERS.map(p => [p, true]))

export default function App() {
  const [visibleZones, setVisibleZones] = useState(DEFAULT_VISIBLE)
  const { cityData, counts, prayerTexture } = usePrayerTimes(visibleZones)
  const [tooltip, setTooltip] = useState({ city: null, x: 0, y: 0 })

  const handleToggle = (prayer) => {
    setVisibleZones(prev => ({ ...prev, [prayer]: !prev[prayer] }))
  }

  const handleCityHover = useCallback((city, _prev, event) => {
    if (!city) { setTooltip({ city: null, x: 0, y: 0 }); return }
    setTooltip({ city, x: event?.clientX ?? 0, y: event?.clientY ?? 0 })
  }, [])

  const handleMouseMove = useCallback((e) => {
    if (tooltip.city) setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }))
  }, [tooltip.city])

  return (
    <div
      className="w-screen h-screen bg-[#010408] overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      <GlobeView
        points={cityData}
        prayerTexture={ZONES_ENABLED ? prayerTexture : null}
        onCityHover={handleCityHover}
        onCityClick={(city) => city && setTooltip(prev => ({ ...prev, city }))}
      />
      <Header />
      {SIDEBAR_ENABLED && <PrayerToggle visible={visibleZones} counts={counts} onToggle={handleToggle} />}
      <Legend counts={counts} />
      <CityTooltip city={tooltip.city} x={tooltip.x} y={tooltip.y} />
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(1,4,8,0.7) 100%)' }}
      />
    </div>
  )
}
