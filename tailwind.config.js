/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        '3/10': '30%',
        '35%': '35%',
        '7/10': '70%',
        '11/12': '91.666667%',
        15: '60px',
      },
      height: {
        37.5: '150px',
        '90vh': '90vh',
      },
      spacing: {
        0.75: '3px',
        1.25: '5px',
        1.5: '6px',
        4.75: '19px',
        5.25: '21px',
      },
      colors: {
        'mid-gray': '#898989',
      },
      zIndex: {
        1000: '1000',
      },
      gridTemplateRows: {
        '[auto_auto]': 'auto auto',
      },
      fontWeight: {
        light: 'var(--text-light)',
        bold: 'var(--text-bold)',
      },
    },
  },
  plugins: [],
};
