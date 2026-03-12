import { useState, useEffect, useRef } from 'react'
import { Coordinates, PrayerTimes, CalculationMethod } from 'adhan'
import { CITIES } from '../data/cities'
import { buildPrayerZones } from '../utils/prayerZones'

export const PRAYER_COLORS = {
  fajr:    '#a8d8ff',
  dhuhr:   '#ffe566',
  asr:     '#ffaa44',
  maghrib: '#ff7eb3',
  isha:    '#b388ff',
  none:    '#1e3a5f',
}

export const PRAYER_LABELS = {
  fajr:    'Fajr',
  dhuhr:   'Dhuhr',
  asr:     'Asr',
  maghrib: 'Maghrib',
  isha:    'Isha',
}

export const PRAYER_ARABIC = {
  fajr:    'الفجر',
  dhuhr:   'الظهر',
  asr:     'العصر',
  maghrib: 'المغرب',
  isha:    'العشاء',
}

const AZAN_WINDOW_MS = 20 * 60 * 1000 // 20 minutes

function computeCity(city, date) {
  try {
    const coords = new Coordinates(city.lat, city.lon)
    const params = CalculationMethod.MuslimWorldLeague()
    const times = new PrayerTimes(coords, date, params)

    const prayerTimes = {
      fajr:    times.fajr,
      dhuhr:   times.dhuhr,
      asr:     times.asr,
      maghrib: times.maghrib,
      isha:    times.isha,
    }

    // Azan pulse: within 20 min of any prayer start
    const nowMs = date.getTime()
    let activePrayer = null
    for (const [name, t] of Object.entries(prayerTimes)) {
      const diff = nowMs - t.getTime()
      if (diff >= 0 && diff <= AZAN_WINDOW_MS) { activePrayer = name; break }
    }

    // Prayer period: which salah window are we currently in
    const ordered = ['fajr','dhuhr','asr','maghrib','isha'].map(n => ({ name: n, t: prayerTimes[n] }))
    let period = null
    for (let i = 0; i < ordered.length; i++) {
      const start = ordered[i].t.getTime()
      const end   = ordered[i+1] ? ordered[i+1].t.getTime() : Infinity
      if (nowMs >= start && nowMs < end) { period = ordered[i].name; break }
    }
    if (!period && nowMs < ordered[0].t.getTime()) period = 'isha'

    const localTime = date.toLocaleTimeString('en-US', {
      timeZone: city.tz,
      hour: '2-digit', minute: '2-digit', hour12: true,
    })

    return {
      ...city,
      prayer: activePrayer,                          // non-null only during azan window
      period,                                        // current prayer period
      color: activePrayer ? PRAYER_COLORS[activePrayer] : PRAYER_COLORS.none,
      active: !!activePrayer,
      localTime,
      times: prayerTimes,
    }
  } catch {
    return { ...city, prayer: null, period: null, color: PRAYER_COLORS.none, active: false, localTime: '--:--', times: null }
  }
}

function getCounts(cityData) {
  const counts = { fajr: 0, dhuhr: 0, asr: 0, maghrib: 0, isha: 0 }
  cityData.forEach(c => { if (c.prayer) counts[c.prayer]++ })
  return counts
}

export function usePrayerTimes() {
  const [cityData, setCityData]   = useState([])
  const [counts,   setCounts]     = useState({})
  const [zones,    setZones]      = useState({})
  const [now,      setNow]        = useState(new Date())
  const intervalRef = useRef(null)

  const refresh = () => {
    const date = new Date()
    setNow(date)
    const data = CITIES.map(c => computeCity(c, date))
    setCityData(data)
    setCounts(getCounts(data))
    setZones(buildPrayerZones(date))
  }

  useEffect(() => {
    refresh()
    intervalRef.current = setInterval(refresh, 30_000)
    return () => clearInterval(intervalRef.current)
  }, [])

  return { cityData, counts, zones, now }
}
