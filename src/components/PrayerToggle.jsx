import { PRAYER_COLORS, PRAYER_LABELS, PRAYER_ARABIC } from '../hooks/usePrayerTimes'

const PRAYERS = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha']

export default function PrayerToggle({ visible, counts, onToggle }) {
  return (
    <div className="absolute left-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2">
      <p className="text-[9px] font-mono tracking-[0.3em] uppercase text-slate-600 mb-1">
        Prayer Zones
      </p>
      {PRAYERS.map(prayer => {
        const on    = visible[prayer]
        const color = PRAYER_COLORS[prayer]
        const count = counts[prayer] || 0
        return (
          <button
            key={prayer}
            onClick={() => onToggle(prayer)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg border transition-all duration-200 text-left"
            style={{
              background:   on ? `${color}14` : 'rgba(255,255,255,0.02)',
              borderColor:  on ? `${color}55` : 'rgba(255,255,255,0.06)',
              opacity:      on ? 1 : 0.45,
            }}
          >
            {/* Dot */}
            <div
              className="w-2.5 h-2.5 rounded-full flex-shrink-0 transition-all duration-200"
              style={{
                background:  on ? color : 'transparent',
                border:      `1.5px solid ${color}`,
                boxShadow:   on ? `0 0 7px ${color}` : 'none',
              }}
            />
            {/* Labels */}
            <div className="flex flex-col leading-none gap-0.5">
              <span
                className="text-[11px] font-display font-medium"
                style={{ color: on ? color : '#475569' }}
              >
                {PRAYER_LABELS[prayer]}
              </span>
              <span className="text-[9px] text-slate-600 font-mono">
                {PRAYER_ARABIC[prayer]}
              </span>
            </div>
            {/* Azan count badge */}
            {count > 0 && (
              <div
                className="ml-auto text-[9px] font-mono tabular-nums px-1.5 py-0.5 rounded-full"
                style={{
                  background: `${color}22`,
                  color,
                  border: `1px solid ${color}44`,
                }}
              >
                {count}
              </div>
            )}
          </button>
        )
      })}
      <p className="text-[8px] font-mono text-slate-700 mt-1 leading-relaxed">
        Zones show prayer period<br/>Pulses show active Azan
      </p>
    </div>
  )
}
