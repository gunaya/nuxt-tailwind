const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    //any file that may contain the reference of CSS styles by class name.
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      darkSelector: '.dark-mode',
      screens: {
        '2xl': '1536px'
      },
      colors: {
        teal: colors.teal,
        midnight: '#0f0f17'
      },
      spacing: {
        128: '32rem'
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
