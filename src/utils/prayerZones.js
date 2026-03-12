import { Coordinates, PrayerTimes, CalculationMethod } from 'adhan'

const BAND_DEG = 5

function getPeriodForLon(lon, date) {
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
    const end   = ordered[i + 1] ? ordered[i + 1].t.getTime() : Infinity
    if (nowMs >= start && nowMs < end) return ordered[i].name
  }
  if (nowMs < ordered[0].t.getTime()) return 'isha'
  return null
}

function makeBandPolygon(lonStart, lonEnd) {
  return {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [lonStart, -89],
        [lonEnd,   -89],
        [lonEnd,    89],
        [lonStart,  89],
        [lonStart, -89],
      ]]
    }
  }
}

export function buildPrayerZones(date) {
  const bands = { fajr: [], dhuhr: [], asr: [], maghrib: [], isha: [] }
  for (let lon = -180; lon < 180; lon += BAND_DEG) {
    const period = getPeriodForLon(lon + BAND_DEG / 2, date)
    if (period && bands[period]) {
      bands[period].push(makeBandPolygon(lon, lon + BAND_DEG))
    }
  }
  return bands
}
