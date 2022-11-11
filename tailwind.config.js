/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors:{
      primary: "#5047EB",
      white: "#FFFFFF",
      black: "#121212",
      theme: {
        dark: "#08080C",
        light: "#F7F7F8"
      },
    },
    fontFamily: {
      chakra : ['Chakra Petch', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
