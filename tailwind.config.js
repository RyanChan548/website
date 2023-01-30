/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",

    
  ],
  theme: {
    colors: {
      'blue':{
        100: '#EAFDFC',
        200: '#BFEAF5',
        300: '#91D8E4',
        400: '#82AAE3',
        500: '#2C74B3',
        600: '#205295',
        700: '#144272',
        800: '#0A2647'


      }
    },
    extend: {},
  },
  plugins: [],
}
