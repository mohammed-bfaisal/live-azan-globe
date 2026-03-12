import { PRAYER_COLORS, PRAYER_LABELS, PRAYER_ARABIC } from '../hooks/usePrayerTimes'

const FLAG_BASE = 'https://flagcdn.com/24x18'

export default function CityTooltip({ city, x, y }) {
  if (!city) return null

  const color = PRAYER_COLORS[city.prayer]
  const label = PRAYER_LABELS[city.prayer]
  const arabic = PRAYER_ARABIC[city.prayer]
  const isActive = city.prayer !== 'none'

  // Clamp tooltip to viewport
  const style = {
    left: Math.min(x + 14, window.innerWidth - 220),
    top: Math.max(y - 10, 10),
  }

  return (
    <div
      className="absolute z-30 pointer-events-none"
      style={style}
    >
      <div
        className="rounded-lg px-4 py-3 backdrop-blur-md border text-sm w-52"
        style={{
          background: 'rgba(5, 12, 28, 0.88)',
          borderColor: isActive ? `${color}55` : '#1e3a5f',
          boxShadow: isActive ? `0 0 20px ${color}22` : 'none',
        }}
      >
        {/* City + country */}
        <div className="flex items-center gap-2 mb-2">
          <img
            src={`${FLAG_BASE}/${city.country.toLowerCase()}.png`}
            alt=""
            className="w-5 h-3.5 object-cover rounded-sm opacity-80"
            onError={e => { e.target.style.display = 'none' }}
          />
          <span className="font-display font-medium text-slate-100 text-sm">
            {city.name}
          </span>
          <span className="text-[10px] font-mono text-slate-500 ml-auto">
            {city.country}
          </span>
        </div>

        {/* Local time */}
        <div className="text-[11px] font-mono text-slate-400 mb-2.5">
          Local time: <span className="text-slate-200">{city.localTime}</span>
        </div>

        {/* Prayer status */}
        <div
          className="flex items-center justify-between rounded px-2.5 py-1.5"
          style={{
            background: isActive ? `${color}18` : 'rgba(30,58,95,0.3)',
            border: `1px solid ${isActive ? color + '44' : '#1e3a5f'}`,
          }}
        >
          {isActive ? (
            <>
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: color, boxShadow: `0 0 6px ${color}` }}
                />
                <span
                  className="text-xs font-display font-medium"
                  style={{ color }}
                >
                  {label}
                </span>
              </div>
              <span className="text-sm" style={{ color: `${color}bb` }}>
                {arabic}
              </span>
            </>
          ) : (
            <span className="text-[11px] text-slate-500 font-mono">
              Between prayers
            </span>
          )}
        </div>

        {/* Prayer times mini-table */}
        {city.times && (
          <div className="mt-2.5 grid grid-cols-2 gap-x-3 gap-y-0.5">
            {['fajr','dhuhr','asr','maghrib','isha'].map(p => {
              const t = city.times[p]
              if (!t) return null
              const tStr = t.toLocaleTimeString('en-US', {
                timeZone: city.tz,
                hour: '2-digit', minute: '2-digit', hour12: true
              })
              const isCurrent = city.prayer === p
              return (
                <div key={p} className="flex items-center justify-between col-span-2">
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
