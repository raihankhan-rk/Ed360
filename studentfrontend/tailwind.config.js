/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {colors: {
      //Color Palette
      pale: '#E9EAFF', //whitish purple
      primary: '#6A72FA' , //main purple
      secondary: '#9999EE', //light purple
      accent: '#27235B', //dark purple
      accentD: '#19163A', //very dark purple
      sub: '#9C9C9C', //grey
      white: '#ffffff' 
    },},
  },
  plugins: [],
}
