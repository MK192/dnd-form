/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: '420px',

        sm: '640px',

        md: '768px',

        lg: '960px',

        xl: '1280px',

        '2xl': '1536px',
      },
      colors: {
        bgContainer: '#f2f1ed',
      },
    },
  },
  plugins: [],
};
