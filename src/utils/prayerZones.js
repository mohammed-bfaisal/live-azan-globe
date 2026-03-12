import { Coordinates, PrayerTimes, CalculationMethod } from 'adhan'

const PRAYER_COLORS_RGB = {
  fajr:    [168, 216, 255],
  dhuhr:   [255, 229, 102],
  asr:     [255, 170,  68],
  maghrib: [255, 126, 179],
  isha:    [179, 136, 255],
}

function getPeriodForLatLon(lat, lon, date) {
  try {
    const coords = new Coordinates(lat, lon)
    const params = CalculationMethod.MuslimWorldLeague()
    const times  = new PrayerTimes(coords, date, params)
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
  } catch {
    return null
  }
}

// Build an equirectangular canvas texture showing prayer zones
// W x H pixels — each pixel = one lat/lon cell
export function buildPrayerTexture(date, visibleZones, W = 360, H = 180) {
  const canvas = document.createElement('canvas')
  canvas.width  = W
  canvas.height = H
  const ctx = canvas.getContext('2d')
  const imageData = ctx.createImageData(W, H)
  const data = imageData.data

  for (let py = 0; py < H; py++) {
    const lat = 90 - (py / H) * 180  // +90 at top, -90 at bottom

    for (let px = 0; px < W; px++) {
      const lon = -180 + (px / W) * 360

      const period = getPeriodForLatLon(lat, lon, date)
      const idx = (py * W + px) * 4

      if (period && visibleZones[period] && PRAYER_COLORS_RGB[period]) {
        const [r, g, b] = PRAYER_COLORS_RGB[period]
        data[idx]     = r
        data[idx + 1] = g
        data[idx + 2] = b
        data[idx + 3] = 45  // alpha — semi-transparent overlay
      } else {
        data[idx]     = 0
        data[idx + 1] = 0
        data[idx + 2] = 0
        data[idx + 3] = 0  // fully transparent
      }
    }
  }

  ctx.putImageData(imageData, 0, 0)
  return canvas.toDataURL('image/png')
}
