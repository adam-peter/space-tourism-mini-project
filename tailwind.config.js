/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "space-black": "#0B0D17",
        "space-purple": "#D0D6F9",
        "space-white": "#FFFFFF"
      },
      fontFamily: {
        barlow: ["Barlow Condensed", "sans-serif"],
        bellefair: ["Bellefair", "serif"],
      },
    },
  },
  plugins: [],
};
