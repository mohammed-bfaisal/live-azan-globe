/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          900: '#010408',
          800: '#030810',
          700: '#060f1e',
          600: '#0a1628',
        },
        prayer: {
          fajr:    '#a8d8ff',
          dhuhr:   '#ffe566',
          asr:     '#ffaa44',
          maghrib: '#ff7eb3',
          isha:    '#b388ff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}

