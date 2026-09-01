/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './sanity/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          base: '#18181b',
          card: '#1c1c1f',
          border: '#27272a',
          border2: '#3f3f46',
        },
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
          800: '#1e40af',
        },
        zinc: {
          400: '#a1a1aa',
          500: '#71717a',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
        green: {
          400: '#86efac',
          500: '#22c55e',
        },
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        dancing: ['"Dancing Script"', 'cursive'],
      },
      animation: {
        'badge-float': 'badgeFloat 6s linear infinite',
        'node-pulse': 'nodePulse 3s ease-in-out infinite',
        'particle-float': 'particleFloat ease-in-out infinite',
        'orb-pulse': 'orbPulse 4s ease-in-out infinite',
        'chip-slide': 'chipSlide 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.6s both',
        'fade-in-up': 'fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) both',
        'color-cycle': 'colorCycleAnim 4s ease-in-out infinite',
        'status-pulse': 'statusPulse 2s ease-in-out infinite',
        'dash-travel': 'dashTravel 3s linear infinite',
      },
    },
  },
  plugins: [],
};
