/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#0056B8',
        'green': '#94D60B',
        'gray': '#A8A8B3',
        'background': '#F8F8F8',
      },
    },
  },
  plugins: [],
}
