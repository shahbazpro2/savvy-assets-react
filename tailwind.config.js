/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF0F0F',
        "primary-light": "#FFF2F2",
        'secondary': '#070714',
        'light': '#fff2f296',
      }
    },
  },
  plugins: [],
}

