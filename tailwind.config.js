/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'sh-blue': '0 0 10px var(--shadow-blue)',
        error: '0 0 10px var(--shadow-error)',
      },
      colors: {
        blue: 'var(--blue)',
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
