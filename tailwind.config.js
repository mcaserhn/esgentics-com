/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'aden-orange': '#ed4f18',
        'aden-dark-blue': '#283948',
        'aden-bold-text': '#3a3941',
        'aden-dark-gray': '#333333',
        'aden-mid-grey': '#d1d1d1',
        'aden-light-gray': '#f8f8f8',
      },
      fontFamily: {
        'body': ['Catamaran', 'sans-serif'],
        'title': ['Catamaran', 'sans-serif'],
        'cn': ['Catamaran', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.container-content': {
          'width': '100%',
          'max-width': '1200px',
          'margin': '0 auto',
          'padding': '0 1rem',
        },
      });
    },
  ],
}