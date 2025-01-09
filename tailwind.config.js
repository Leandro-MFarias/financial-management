/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ssl': '400px',
        'ssl2': '525px'
      },
      colors: {
        'redB': '#FF0000',
      }
    },
  },
  plugins: [],
}