import { useState, useEffect } from 'react'

export default function Header() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const utc = time.toUTCString().split(' ').slice(4, 5)[0]
  const date = time.toUTCString().split(' ').slice(0, 4).join(' ')

  return (
    <div className="absolute top-0 left-0 right-0 z-20 flex items-start justify-between px-8 pt-7 pointer-events-none">
      {/* Title */}
      <div>
        <h1 className="text-xs font-display font-semibold tracking-[0.3em] uppercase text-blue-300 opacity-90">
          Azan Globe
        </h1>
        <p className="text-[11px] font-mono text-slate-500 mt-0.5 tracking-widest">
          Live Prayer Visualization
        </p>
      </div>

      {/* Clock */}
      <div className="text-right">
        <div className="text-2xl font-mono font-light text-blue-100 tracking-widest tabular-nums">
          {utc} <span className="text-xs text-slate-500 align-middle">UTC</span>
        </div>
        <div className="text-[10px] font-mono text-slate-600 mt-0.5 tracking-widest">
          {date}
        </div>
      </div>
    </div>
  )
}
