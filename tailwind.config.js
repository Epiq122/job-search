// tailwind.config.js

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'brand-gray-1': '#dadce0',
        'brand-blue-1': '#1967d2',
        'brand-green-1': '#137333',
      },
      boxShadow: {
        blue: '0 0 3px 3px #4285f4',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
