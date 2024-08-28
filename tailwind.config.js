module.exports = {
  content: ['./*.html'],
  screen: {
    sm:'480px',
    md:'768px',
    lg:'976px',
    xl:'1440px',
  },

  theme: {
    extend: {
      fontfamily:{
        sans:['Barlow semi condensed','sans-serif'],
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
