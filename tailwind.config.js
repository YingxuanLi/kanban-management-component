/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
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
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans", "serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};
