/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,ts,tsx,jsx,css}"],
  theme: {
    colors: {
      "black": "#000112",
      "medium-grey": "#828FA3",
      "dark-grey": "#2b2c37",
      "very-dark-grey": "#20212C",
      "main-purple": "#635fc7",
      "main-purple-hover": "#A8A4FF",
      "lines-dark": "#3E3F4E",
      "lines-light": "#E4EBFA",
      "light-grey": "#f4F7FD",
      "white": "#FFFFFF",
      "red": "#EA5555",
      "red-hover": "#FF9898",
      "btn-secondary":"#635FC71A",
      "btn-secondary-hover":"#635FC740 25%",
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans", "serif"],
      serif: ["Merriweather", "serif"],
    },
    fontSize:{
      lg: '15px',
      sm: '13px'
    },
    heading:{
      XL: 'sans bold 24px 30pxLine',
      L: 'sans bold 18px 23pxLine',
      M: 'sans bold 15px 19pxLine',
      S: 'sans bold 12px 15pxLine 2,4px Kerning'
    },
    body:{
      M: 'sans bold 12px 15pxLine',
      L: 'sans medium 13px 23pxLine'
    },
    borderRadius:{
      lg: '24px',
      sm: '20px'
    },
    width: {
      btn: '255px',
      checkbox: '350px'
    },
    height:{
      lg: "48px",
      sm:"40px"
    }
  },
  plugins: [],
};
