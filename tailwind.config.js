/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // TEMA OSCURO (Tu base)
        dark: {
          bg: '#0a0a0a',     // Fondo casi negro (El de tu diseño)
          card: '#171717',   // Fondo de tarjetas un poco más claro
          border: '#262626', // Bordes sutiles
        },
        // TEMA PRINCIPAL (Naranja "Alex.Dev")
        primary: {
          DEFAULT: '#f97316', // Un naranja vibrante (Orange-500)
          hover: '#ea580c',   // Un poco más oscuro para hover (Orange-600)
          glow: 'rgba(249, 115, 22, 0.5)' // Resplandor naranja
        }
      }
    },
  },
  plugins: [],
}