/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        ShadowsIntoLight: "'Shadows Into Light', serif",
        inter: "'Inter', serif",
      }
    },
  },
  plugins: [],
}

