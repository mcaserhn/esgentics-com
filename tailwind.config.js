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
        'primary-red': '#ed4f18',
        'deep-blue': '#283948',
        'bold-text': '#3a3941',
        'dark-gray': '#333333',
        'medium-gray': '#d1d1d1',
        'light-gray': '#f8f8f8',
      },
      fontFamily: {
        'catamaran': ['Catamaran', 'sans-serif'],
      },
    },
  },
  plugins: [],
}