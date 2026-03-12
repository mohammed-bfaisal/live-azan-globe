import { useState, useEffect, useRef } from 'react'
import { Coordinates, PrayerTimes, CalculationMethod, Prayer } from 'adhan'
import { CITIES } from '../data/cities'

// Prayer color palette (dark space aesthetic)
export const PRAYER_COLORS = {
  fajr:    '#a8d8ff',  // soft dawn blue
  dhuhr:   '#ffe566',  // solar yellow
  asr:     '#ffaa44',  // amber afternoon
  maghrib: '#ff7eb3',  // sunset pink
  isha:    '#b388ff',  // deep violet night
  none:    '#1e3a5f',  // dark ocean (inactive)
}

export const PRAYER_LABELS = {
  fajr:    'Fajr',
  dhuhr:   'Dhuhr',
  asr:     'Asr',
  maghrib: 'Maghrib',
  isha:    'Isha',
  none:    '—',
}

export const PRAYER_ARABIC = {
  fajr:    'الفجر',
  dhuhr:   'الظهر',
  asr:     'العصر',
  maghrib: 'المغرب',
  isha:    'العشاء',
}

function getPrayerKey(prayerEnum) {
  if (prayerEnum === Prayer.Fajr)    return 'fajr'
  if (prayerEnum === Prayer.Dhuhr)   return 'dhuhr'
  if (prayerEnum === Prayer.Asr)     return 'asr'
  if (prayerEnum === Prayer.Maghrib) return 'maghrib'
  if (prayerEnum === Prayer.Isha)    return 'isha'
  return 'none'
}

function computeCityPrayer(city, date) {
  try {
    const coords = new Coordinates(city.lat, city.lon)
    const params = CalculationMethod.MuslimWorldLeague()
    const times = new PrayerTimes(coords, date, params)
    const current = times.currentPrayer(date)
    const prayerKey = getPrayerKey(current)

    // Get local time string using city's IANA timezone
    const localTime = date.toLocaleTimeString('en-US', {
      timeZone: city.tz,
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })

    return {
      ...city,
      prayer: prayerKey,
      color: PRAYER_COLORS[prayerKey],
      active: prayerKey !== 'none',
      localTime,
      times: {
        fajr:    times.fajr,
        dhuhr:   times.dhuhr,
        asr:     times.asr,
        maghrib: times.maghrib,
        isha:    times.isha,
      }
    }
  } catch {
    return {
      ...city,
      prayer: 'none',
      color: PRAYER_COLORS.none,
      active: false,
      localTime: '--:--',
      times: null,
    }
  }
}

function computeAll(date) {
  return CITIES.map(city => computeCityPrayer(city, date))
}

function getCounts(cityData) {
  const counts = { fajr: 0, dhuhr: 0, asr: 0, maghrib: 0, isha: 0, none: 0 }
  cityData.forEach(c => { counts[c.prayer] = (counts[c.prayer] || 0) + 1 })
  return counts
}

export function usePrayerTimes() {
  const [cityData, setCityData] = useState([])
  const [counts, setCounts] = useState({})
  const [now, setNow] = useState(new Date())
  const intervalRef = useRef(null)

  const refresh = () => {
    const date = new Date()
    setNow(date)
    const data = computeAll(date)
    setCityData(data)
    setCounts(getCounts(data))
  }

  useEffect(() => {
    refresh()
    // Refresh every 30 seconds
    intervalRef.current = setInterval(refresh, 30_000)
    return () => clearInterval(intervalRef.current)
  }, [])

  return { cityData, counts, now }
}
