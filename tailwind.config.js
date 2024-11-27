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
        ice: '#bdbfc3',
      },
      fontFamily: {
        sans: ['Rajdhani', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      fontSize: {
        fluid: 'clamp(0.5rem, 1vw, 1.05rem)',
      },

      boxShadow: {
        glow: '0 0 5px #bdbfc3',
        subtle: '0 0 5px rgba(136, 141, 158, 1)',
        'subtle-sm': '0 0 3px rgba(136, 141, 158, 1)',
      },
      dropShadow: {
        glow: '0 0 2px #bdbfc3',
        subtle: '0 0 2px rgba(136, 141, 158, 1)',
        btn: '0 0 1px rgba(136, 141, 158, 1)',
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
