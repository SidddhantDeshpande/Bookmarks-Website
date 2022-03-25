// const { backgroundImage } = require('tailwindcss/defaulttheme');

module.exports = {
  darkMode: 'class',
 
  content: ['index.html','./*.js'],
  theme: {
    extend: {
      colors:{
        "bookmark-purple" : "#5267DF",
        "bookmark-red" : "#FA5959",
        "bookmark-blue" : "#242A45",
        "bookmark-grey" : "#9194A2",
        "bookmark-white" : "#f7f7f7",
        
        "bookmark-dk-purple":"#7653DA",
        "bookmark-dk-red" : "#D74F4F",
        "bookmark-dk-blue" : "#7653DA",
        "bookmark-dk-white" : "#7653DA",
        "book-blk" : "#1E1E1E",
        "mat-gr" : "#121212",
        

      },
     
    },
    fontFamily:{
      Poppins: ["Poppins,sans-serif"],
      Work: ["Work Sans", "sans-serif"]
    },
    container:{
      center:true,
      padding:"1rem",
      screens:{
        lg: "1124px",
        xl: "1124px",
        "2xl" : "1124px"
      }
    }
  },
  plugins: [
    
  ],
}
