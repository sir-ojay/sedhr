module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#fdf8f6',
          100: '#616A6A',
          900: '#101C1D',
        },
      },
      fontFamily: {
        'epilogue': ['Epilogue', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
