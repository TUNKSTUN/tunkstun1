/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      xs: '0.5rem',
      ms: '0.6rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '10xl': '4.052rem',
    },
    screens: {
      
        'sm': {'min': '350', 'max': '780px'},
        'md': {'min': '781px', 'max': '991px'},
        'lg': {'min': '992px', 'max': '1149px'},
        'xl': {'min': '1150px'},
    
    },
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      },
      fontFamily: {
        arial: ['Arial', 'sans-serif'],

      },
      keyframes: {
        spin3d: {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '100%': { transform: 'rotateX(360deg) rotateY(360deg)' },
        },
        orbitX: {
          '0%': { transform: 'rotate(0deg) translateX(100px) translateZ(0) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) translateZ(0) rotate(-360deg)' },
        },
        orbitY: {
          '0%': { transform: 'rotate(0deg) translateY(100px) translateZ(0) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateY(100px) translateZ(0) rotate(-360deg)' },
        },
        orbitZ: {
          '0%': { transform: 'rotate(0deg) translateZ(50px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateZ(50px) rotate(-360deg)' },
        },
      },
      animation: {
        'spin-3d': 'spin3d 8s linear infinite',
        'orbit-x': 'orbitX 4s ease-in-out infinite',
        'orbit-y': 'orbitY 6s ease-in-out infinite',
        'orbit-z': 'orbitZ 5s ease-in-out infinite',
      },
      crollbarWidth: {
        thin: '6px',
      },
      scrollbarColor: {
        base: 'rgba(0, 0, 0, 0.2)',
        hover: 'rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
