/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#050713',
          900: '#07101f',
          850: '#0d1831',
          800: '#12203c',
          700: '#182b4a'
        },
        neon: {
          cyan: '#2cf2ff',
          purple: '#9b5cff',
          blue: '#55b3ff',
          magenta: '#ff4dff',
          violet: '#6d5aff'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 50px rgba(44, 242, 255, 0.18)',
        glowStrong: '0 0 40px rgba(155, 92, 255, 0.22), 0 0 80px rgba(44, 242, 255, 0.12)'
      },
      backgroundImage: {
        'grid-lines': 'radial-gradient(circle at top left, rgba(44,242,255,0.15), transparent 35%), radial-gradient(circle at bottom right, rgba(155,92,255,0.12), transparent 25%)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' }
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.55 }
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        pulse: 'pulse 4s ease-in-out infinite',
        spinSlow: 'spinSlow 24s linear infinite'
      }
    }
  },
  plugins: []
}
