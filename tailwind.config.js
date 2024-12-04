/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}'],

  theme: {
    extend: {
      colors: {
        midnight: '#0c0c13',
        steel: '#16161e',
        dove: 'rgba(136, 141, 158, 1)',
        'dove-op': 'rgba(136, 141, 158, 0.6)',
        offwhite: '#d9d6e0',
        'offwhite-op': 'rgba(217, 214, 224, 0.3)',
        ice: '#bdbfc3',
        lightblue: '#b4c7db',
        'lightblue-op': 'rgba(180, 199, 219, 0.6)',
      },
      fontFamily: {
        sans: ['Rajdhani', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      fontSize: {
        fluid: 'clamp(0.85rem, 1vw, 1.05rem)',
      },

      boxShadow: {
        glow: '0 0 5px #bdbfc3',
        subtle: '0 0 5px rgba(136, 141, 158, 1)',
        'subtle-sm': '0 0 3px rgba(136, 141, 158, 1)',
        dark: '0 0 7px #0c0c13',
      },
      dropShadow: {
        glow: '0 0 2px #bdbfc3',
        subtle: '0 0 2px rgba(136, 141, 158, 1)',
        btn: '0 0 1px rgba(136, 141, 158, 1)',
      },

      keyframes: {
        scaleFromLeft: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'center' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'center' },
        },
      },
      animation: {
        scaleFromLeft: 'scaleFromLeft 0.5s ease-out forwards',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-subtle': {
          textShadow: '0 0 2px rgba(136, 141, 158, 1)',
        },
        '.text-shadow-glow': {
          textShadow: '0 0 2px #bdbfc3',
        },
        '.text-shadow-shine': {
          textShadow: '0 0 5px #bdbfc3',
        },
      });
    },
  ],
};
