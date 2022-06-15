module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#11747D',
        secondary: '#7F4433',
        tertiary: '#E7F6FD',
        accents: {
          brown: '#F47D5B',
          purple: '#7B61FF',
          blue: '#26A4FF',
          green: '#56CDAD',
          red: '#FF6550',
          yellow: '#FFB836',
        },
        neutral: {
          10: '#F9FAFC',
          20: '#E4E5E7',
          40: '#A8ADB7',
          60: '#7C8493',
          80: '#515B6F',
          100: '#25324B',
        },
        dark: {
          100: '#616A6A',
          900: '#142425',
        },
      },
      fontFamily: {
        'epilogue': ['Epilogue', 'sans-serif'],
        'clash': ['Clash Display', 'sans-serif'],
      },
      backgroundImage: {
        'auth-left': "url('/assets/images/auth/bg-svg.svg')",
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded']
  },
};
