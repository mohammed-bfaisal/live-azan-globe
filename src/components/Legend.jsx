import { PRAYER_COLORS, PRAYER_LABELS, PRAYER_ARABIC } from '../hooks/usePrayerTimes'

const PRAYERS = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha']

export default function Legend({ counts = {} }) {
  const total = PRAYERS.reduce((s, p) => s + (counts[p] || 0), 0)

  return (
    <div className="absolute bottom-8 left-8 z-20 pointer-events-none">
      <p className="text-[9px] font-mono tracking-[0.3em] uppercase text-slate-600 mb-3">
        Prayer Key
      </p>
      <div className="flex flex-col gap-2">
        {PRAYERS.map(prayer => {
          const count = counts[prayer] || 0
          const active = count > 0
          return (
            <div key={prayer} className="flex items-center gap-3">
              {/* Color dot */}
              <div
                className="w-2.5 h-2.5 rounded-full flex-shrink-0 transition-all duration-500"
                style={{
                  background: PRAYER_COLORS[prayer],
                  boxShadow: active ? `0 0 8px ${PRAYER_COLORS[prayer]}` : 'none',
                  opacity: active ? 1 : 0.25,
                }}
              />
              {/* Name */}
              <div className="flex items-baseline gap-2 min-w-[120px]">
                <span
                  className="text-[11px] font-display font-medium transition-colors duration-500"
                  style={{ color: active ? PRAYER_COLORS[prayer] : '#334155' }}
                >
                  {PRAYER_LABELS[prayer]}
                </span>
                <span className="text-[10px] text-slate-600 font-mono">
                  {PRAYER_ARABIC[prayer]}
                </span>
              </div>
              {/* Count badge */}
              <div
                className="text-[10px] font-mono tabular-nums transition-all duration-500 min-w-[28px] text-right"
                style={{ color: active ? PRAYER_COLORS[prayer] : '#1e3a5f' }}
              >
                {active ? `${count}` : '·'}
              </div>
            </div>
          )
        })}
      </div>

      {/* Total active */}
      <div className="mt-4 pt-3 border-t border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-[10px] font-mono text-slate-400">
            <span className="text-blue-300 font-medium">{total}</span> cities calling now
          </span>
        </div>
      </div>
    </div>
  )
}
