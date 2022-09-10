@import url('https://fonts.googleapis.com/css2?family=Inter&family=Poppins&display=swap');

/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    // add this lines
    "./pages/**/*.{js,ts,jsx,tsx}",
    // if you have other folder, add its path too, like this:
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFeatureSettings: {
      numeric: ['tnum', 'salt', 'ss02']
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '36px',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem'
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
     }
    },
  },
  plugins: [require('tailwindcss-font-inter')],
}