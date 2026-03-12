import { useState, useEffect } from 'react'
import { PRAYER_COLORS, PRAYER_LABELS, PRAYER_ARABIC } from '../hooks/usePrayerTimes'

export default function CityTooltip({ city, x, y }) {
  const [localTime, setLocalTime] = useState('')

  // Tick every second while a city is hovered
  useEffect(() => {
    if (!city) { setLocalTime(''); return }
    const tick = () => {
      setLocalTime(new Date().toLocaleTimeString('en-US', {
        timeZone: city.tz,
        hour:     '2-digit',
        minute:   '2-digit',
        second:   '2-digit',
        hour12:   true,
      }))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [city])

  if (!city) return null

  const color    = PRAYER_COLORS[city.prayer] || PRAYER_COLORS.none
  const label    = PRAYER_LABELS[city.prayer]
  const arabic   = PRAYER_ARABIC[city.prayer]
  const isActive = !!city.prayer

  const style = {
    left: Math.min(x + 14, window.innerWidth - 240),
    top:  Math.max(y - 10, 10),
  }

  return (
    <div className="absolute z-30 pointer-events-none" style={style}>
      <div
        className="rounded-lg px-4 py-3 backdrop-blur-md border text-sm w-56"
        style={{
          background:  'rgba(5, 12, 28, 0.92)',
          borderColor: isActive ? color + '55' : '#1e3a5f',
          boxShadow:   isActive ? '0 0 24px ' + color + '22' : 'none',
        }}
      >
        {/* City + country flag */}
        <div className="flex items-center gap-2 mb-2">
          <img
            src={'https://flagcdn.com/24x18/' + city.country.toLowerCase() + '.png'}
            alt=""
            className="w-5 h-3.5 object-cover rounded-sm opacity-80"
            onError={e => { e.target.style.display = 'none' }}
          />
          <span className="font-display font-medium text-slate-100 text-sm">{city.name}</span>
          <span className="text-[10px] font-mono text-slate-500 ml-auto">{city.country}</span>
        </div>

        {/* Live ticking local time */}
        <div
          className="text-lg font-mono tabular-nums mb-2.5 tracking-widest"
          style={{ color: isActive ? color : '#94a3b8' }}
        >
          {localTime}
        </div>

        {/* Prayer status */}
        <div
          className="flex items-center justify-between rounded px-2.5 py-1.5 mb-2.5"
          style={{
            background: isActive ? color + '18' : 'rgba(30,58,95,0.3)',
            border:     '1px solid ' + (isActive ? color + '44' : '#1e3a5f'),
          }}
        >
          {isActive ? (
            <>
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: color, boxShadow: '0 0 6px ' + color }}
                />
                <span className="text-xs font-display font-medium" style={{ color }}>{label}</span>
              </div>
              <span className="text-sm" style={{ color: color + 'bb' }}>{arabic}</span>
            </>
          ) : (
            <span className="text-[11px] text-slate-500 font-mono">Between prayers</span>
          )}
        </div>

        {/* All 5 prayer times */}
        {city.times && (
          <div className="flex flex-col gap-0.5">
            {['fajr','dhuhr','asr','maghrib','isha'].map(p => {
              const t = city.times[p]
              if (!t) return null
              const tStr = t.toLocaleTimeString('en-US', {
                timeZone: city.tz,
                hour: '2-digit', minute: '2-digit', hour12: true,
              })
              const isCurrent = city.prayer === p
              return (
                <div key={p} className="flex items-center justify-between">
                  <span
                    className="text-[9px] font-mono uppercase tracking-widest"
                    style={{ color: isCurrent ? PRAYER_COLORS[p] : '#475569' }}
                  >
                    {PRAYER_LABELS[p]}
                  </span>
                  <span
                    className="text-[9px] font-mono tabular-nums"
                    style={{ color: isCurrent ? PRAYER_COLORS[p] : '#334155' }}
                  >
                    {tStr}
                  </span>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
