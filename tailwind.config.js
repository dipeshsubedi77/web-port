/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      screens:{
        "sm":"480px"
      },
      spacing:{
        "big":"38rem"
      },
     
      fontFamily:{
        nunito: ['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [],
}

