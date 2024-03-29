/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      spacing: {
        '1': '1px',
        '2': '2px',
        '3': '4px',
        '4': '8px',
        '5': '16px',
        '6': '32px',
        '7': '64px',
        '8': '128px',
        '9': '256px',
        '10': '512px',
      }
    },
    spacing: {
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
    }

  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
