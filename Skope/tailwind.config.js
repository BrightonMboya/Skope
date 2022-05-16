module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'skope-blue': '#5568FE',
        'btn-color': '#313A56',
        'gradient-1': "#F8F1FF",
        'gradient-2' : "#E7EDFF",
      },

      backgroundImage: {
        'home-pattern' : 
          "linear-gradient(to top bottom, rgba('#F8F1FF'), rgba('#E7EDFF')), url('../src/img/bg.png')"
        ,
        
      },
    },
  },
  plugins: [],
}