/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      
        'sm': {'min': '576px', 'max': '767px'},
        'md': {'min': '768px', 'max': '991px'},
        'lg': {'min': '992px', 'max': '1199px'},
        'xl': {'min': '1200px'},
    
    },
    extend: {},
  },
  plugins: [],
}
