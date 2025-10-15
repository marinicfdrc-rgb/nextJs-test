// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',          // pages and layouts
    './components/**/*.{js,ts,jsx,tsx}',   // shared components
    './src/**/*.{js,ts,jsx,tsx}'           // optional if you use src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
