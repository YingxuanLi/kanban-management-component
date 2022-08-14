import Color from "color";
export const colors = {
  main_purple: "#635FC7",
  main_purple_hover: "#A8A4FF",
  black: "#000112",
  very_dark_grey: "#20212C",
  dark_grey: "#2B2C37",
  lines: "#3E3F4E",
  medium_grey: "#828FA3",
  lines_light: "#E4EBFA",
  light_grey: "#F4F7FD",
  white: "#FFFFFF",
  red: "#EA5555",
  red_hover: "#FF9898",
};

export const fontSize = {
  XL: "24px",
  L: "18px",
  M: "15px",
  S: "12px",
};

export const lineHeight = {
  XL: "30px",
  L: "23px",
  M: "19px",
  S: "15px",
};

export const opacquer = (color: String, opacity: number) => {
  return Color(color).opaquer(opacity);
};
