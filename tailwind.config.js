// tailwind.config.js

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'brand-gray-1': '#dadce0',
        'brand-blue-1': '#1967d2',
        'brand-green-1': '#137333'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: ['prettier-plugin-tailwindcss']
}
