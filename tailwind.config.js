/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7f7f7',
          100: '#ededed',
          200: '#d6d6d6',
          500: '#737373',
          600: '#525252',
          700: '#3d3d3d',
          800: '#262626',
          900: '#171717',
        },
        warm: {
          50: '#f8f8f8',
          100: '#f2f2f2',
          200: '#e8e8e8',
        },
      },
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          '"Hiragino Sans"',
          '"Hiragino Kaku Gothic ProN"',
          'Meiryo',
          'sans-serif',
        ],
        serif: [
          '"Noto Serif JP"',
          '"Hiragino Mincho ProN"',
          'Georgia',
          'serif',
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
