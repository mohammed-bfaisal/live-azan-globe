# 🌍 Azan Globe

**A real-time 3D visualization of Islamic prayer calls (Azan) happening around the world.**

Built with React, globe.gl (WebGL/ThreeJS), and the Adhan.js astronomical prayer time engine.

---

## ✨ Features

- Live 3D rotating Earth with real satellite texture
- Day/night terminator layer
- 500+ Muslim-majority cities calculated in real time using [Adhan.js](https://github.com/batoulapps/adhan-js)
- Color-coded prayer zones: Fajr · Dhuhr · Asr · Maghrib · Isha
- Hover any city to see its active prayer and local time
- Prayer counts per salah updating every minute

## 🛠 Tech Stack

| Layer | Tool |
|---|---|
| Framework | React + Vite |
| 3D Globe | [react-globe.gl](https://github.com/vasturiano/react-globe.gl) |
| Prayer Times | [adhan-js](https://github.com/batoulapps/adhan-js) |
| Calculation Method | Muslim World League |
| Styling | Tailwind CSS |
| Deploy | Vercel |

## 🚀 Run Locally

```bash
git clone https://github.com/mohammed-bfaisal/azan-globe
cd azan-globe
npm install
npm run dev
```

## 📖 Calculation Method

Prayer times are calculated using the **Muslim World League** method via Adhan.js, which implements Jean Meeus' *Astronomical Algorithms* for solar position accuracy.

---

*"Indeed, prayer has been decreed upon the believers a decree of specified times."* — Quran 4:103

## 🗂 Project Structure

```
src/
├── components/
│   ├── GlobeView.jsx   # WebGL globe, markers, rings
│   ├── Header.jsx      # Live UTC clock
│   ├── Legend.jsx      # Prayer key + live city counts
│   └── CityTooltip.jsx # Hover card with prayer times
├── data/
│   └── cities.js       # 208 cities across 60+ countries
├── hooks/
│   └── usePrayerTimes.js  # Adhan.js engine, 30s refresh
└── App.jsx
```

## 🌐 Credits

- [Adhan.js](https://github.com/batoulapps/adhan-js) — prayer time calculations
- [react-globe.gl](https://github.com/vasturiano/react-globe.gl) — WebGL globe
- [three-globe](https://github.com/vasturiano/three-globe) — Earth textures
- [flagcdn.com](https://flagcdn.com) — country flag icons
- PEW Research — Muslim population data for city selection

## 📝 License

MIT — fork it, extend it, make it yours.
