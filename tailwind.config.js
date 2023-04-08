/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        blue: '0 0 6px var(--shadow-blue)',
      },
      colors: {
        blue: 'var(--blue)',
        'shadow-blue': 'var(--shadow-blue)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        background: 'var(--background)',
        card: 'var(--card)',
        gray: 'var(--gray)',
        // ...colors,
      },
    },
  },
  plugins: [],
};
