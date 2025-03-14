/** @type {import('tailwindcss').Config} */

// module.exports = {
const config = {
  content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}'],

  theme: {
    extend: {
      colors: {
        midnight: '#0c0c13',
        steel: '#16161e',
        'midnight-op': 'rgba(12, 12, 19, 0.7)',
        dove: 'rgba(136, 141, 158, 1)',
        'dove-op': 'rgba(136, 141, 158, 0.6)',
        offwhite: '#d9d6e0',
        'offwhite-op': 'rgba(217, 214, 224, 0.3)',
        ice: '#bdbfc3',
        lightblue: '#b4c7db',
        'lightblue-op': 'rgba(180, 199, 219, 0.6)',
        'lightblue-xop': 'rgba(180, 199, 219, 0.2)',
      },
      fontFamily: {
        sans: ['Rajdhani', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      fontSize: {
        fluid: 'clamp(1rem, 1vw, 1.05rem)',
      },

      boxShadow: {
        glow: '0 0 5px #bdbfc3',
        subtle: '0 0 5px rgba(136, 141, 158, 1)',
        'subtle-sm': '0 0 3px rgba(136, 141, 158, 1)',
        'subtle-b': '0 2px 2px rgba(136, 141, 158, 1)',
        dark: '0 0 7px #0c0c13',
        'inner-subtle-sm': 'inset 0 0 3px #bdbfc3',
      },
      dropShadow: {
        glow: '0 0 2px #bdbfc3',
        subtle: '0 0 2px rgba(136, 141, 158, 1)',
        btn: '0 0 1px rgba(136, 141, 158, 1)',
      },

      keyframes: {
        scaleFromCenter: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'center' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'center' },
        },

        scaleFromLeft: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },

        openDropdown: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top right' },
          '100%': { transform: 'scaleY(1)', transformOrigin: 'top right' },
        },

        closeDropdown: {
          '0%': { transform: 'scaleY(1)', transformOrigin: 'bottom left' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom left' },
        },
      },

      animation: {
        scaleFromCenter: 'scaleFromCenter 0.5s ease-out forwards',

        scaleFromLeft: 'scaleFromLeft 0.8s ease-out forwards',

        openDropdown: 'openDropdown 0.3s ease-out forwards',

        closeDropdown: 'closeDropdown 0.5s ease-out forwards',
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.w-section': {
          width: '83.333333%' /* 10/12 */,
          minWidth: '66.666667%' /* 2/3 */,
          maxWidth: '995px' /* 2/3 */,
        },
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

export default config;
