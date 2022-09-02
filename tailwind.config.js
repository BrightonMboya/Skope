/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      Montserrat: ["Montserrat", "serif"]
    },
    extend: {
      colors: {
        blue: "5568FE"
      }
    }
  },
  plugins: []
};
