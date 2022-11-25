/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cust-black': '#14152A',
        'primary-dark': '#2C2E59',
        'primary': '#2C2E59',
        'primary-light': '#666CD9',
        'accent': '#9694FF',
        // 'complementary': '#A68E30'
      },
    },
  },
  plugins: [],
}