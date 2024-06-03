/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        bgContainer:'#f2f1ed'
      }
    },
  },
  plugins: [],
}

