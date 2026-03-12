import { Coordinates, PrayerTimes, CalculationMethod } from 'adhan'

// Sample one longitude per degree to determine prayer period
export function buildPrayerZones(date) {
  const PRAYERS = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha']
  const zones = { fajr: [], dhuhr: [], asr: [], maghrib: [], isha: [] }

  // Sample every 2 degrees, group into contiguous ranges
  const STEP = 2
  let currentPrayer = null
  let rangeStart = -180

  for (let lon = -180; lon <= 180; lon += STEP) {
    let period = null

    if (lon < 180) {
      try {
        const coords = new Coordinates(0, lon)
        const params = CalculationMethod.MuslimWorldLeague()
        const times = new PrayerTimes(coords, date, params)
        const ordered = [
          { name: 'fajr',    t: times.fajr    },
          { name: 'dhuhr',   t: times.dhuhr   },
          { name: 'asr',     t: times.asr     },
          { name: 'maghrib', t: times.maghrib },
          { name: 'isha',    t: times.isha    },
        ]
        const nowMs = date.getTime()
        for (let i = 0; i < ordered.length; i++) {
          const start = ordered[i].t.getTime()
          const end = ordered[i + 1] ? ordered[i + 1].t.getTime() : Infinity
          if (nowMs >= start && nowMs < end) { period = ordered[i].name; break }
        }
        if (!period && nowMs < ordered[0].t.getTime()) period = 'isha'
      } catch { period = null }
    }

    // Close range when prayer changes or we hit the end
    if (period !== currentPrayer || lon === 180) {
      if (currentPrayer && zones[currentPrayer] !== undefined) {
        zones[currentPrayer].push({ lonStart: rangeStart, lonEnd: lon })
      }
      currentPrayer = period
      rangeStart = lon
    }
  }

  return zones
}
