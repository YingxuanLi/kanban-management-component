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
      xl: 'sans bold 24px 30pxLine'
    },
    borderRadius:{
      lg: '24px',
      sm: '20px'
    },
    width: {
      btn: '255px',
    },
    height:{
      lg: "48px",
      sm:"40px"
    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
  },
  plugins: [],
};
