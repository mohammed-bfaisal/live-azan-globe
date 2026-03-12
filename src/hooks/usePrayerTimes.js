import { useState, useEffect, useRef, useCallback } from 'react'
import { Coordinates, PrayerTimes, CalculationMethod } from 'adhan'
import { CITIES } from '../data/cities'
import { buildPrayerTexture } from '../utils/prayerZones'

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

const AZAN_WINDOW_MS = 5 * 60 * 1000  // ~Azan duration + iqama announcement

function computeCity(city, date) {
  try {
    const coords = new Coordinates(city.lat, city.lon)
    const params = CalculationMethod.MuslimWorldLeague()
    const times  = new PrayerTimes(coords, date, params)
    const prayerTimes = {
      fajr:    times.fajr,
      dhuhr:   times.dhuhr,
      asr:     times.asr,
      maghrib: times.maghrib,
      isha:    times.isha,
    }
    const nowMs = date.getTime()
    let activePrayer = null
    for (const [name, t] of Object.entries(prayerTimes)) {
      const diff = nowMs - t.getTime()
      if (diff >= 0 && diff <= AZAN_WINDOW_MS) { activePrayer = name; break }
    }
    const localTime = date.toLocaleTimeString('en-US', {
      timeZone: city.tz,
      hour: '2-digit', minute: '2-digit', hour12: true,
    })
    return {
      ...city,
      prayer:   activePrayer,
      color:    activePrayer ? PRAYER_COLORS[activePrayer] : PRAYER_COLORS.none,
      active:   !!activePrayer,
      localTime,
      times:    prayerTimes,
    }
  } catch {
    return { ...city, prayer: null, color: PRAYER_COLORS.none, active: false, localTime: '--:--', times: null }
  }
}

function getCounts(cityData) {
  const counts = { fajr: 0, dhuhr: 0, asr: 0, maghrib: 0, isha: 0 }
  cityData.forEach(c => { if (c.prayer) counts[c.prayer]++ })
  return counts
}

export function usePrayerTimes(visibleZones) {
  const [cityData,      setCityData]      = useState([])
  const [counts,        setCounts]        = useState({})
  const [prayerTexture, setPrayerTexture] = useState(null)
  const intervalRef = useRef(null)

  const refresh = useCallback(() => {
    const date = new Date()
    const data = CITIES.map(c => computeCity(c, date))
    setCityData(data)
    setCounts(getCounts(data))
    setPrayerTexture(buildPrayerTexture(date, visibleZones))
  }, [visibleZones])

  useEffect(() => {
    refresh()
    intervalRef.current = setInterval(refresh, 30_000)
    return () => clearInterval(intervalRef.current)
  }, [refresh])

  return { cityData, counts, prayerTexture }
}
