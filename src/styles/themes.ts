// export interface ThemeProps {
//   background: string;
//   text: string;
// }

// export const darkTheme: ThemeProps = {
//   background: "var(--dark-background)",
//   text: "var(--dark-text)",
// };

import { colors, fontSize } from "./theme-preval";
import { opacquer } from "./theme-preval";
export const themes = {
  light: {
    background: colors.white,
    backgroundSecondary: colors.white,
    checkbox: colors.light_grey,
    checkboxHover: colors.main_purple,
    color: colors.black,
    labelcolor: colors.medium_grey,
  },
  dark: {
    background: colors.dark_grey,
    backgroundSecondary: colors.very_dark_grey,
    checkbox: colors.very_dark_grey,
    checkboxHover: colors.main_purple,
    color: colors.white,
    labelcolor: colors.white,
  },
};
const buttonColorMap = {
  primary: {
    idel: colors.main_purple,
    hover: colors.main_purple_hover,
  },
  secondary: {
    idel: `${opacquer(colors.main_purple, 0.9)}`,
    hover: `${opacquer(colors.main_purple, 0.25)}`,
  },
  destructive: {
    idel: colors.red,
    hover: colors.red_hover,
  },
};

export const lightTheme = {
  name: "LIGHT",
  background: colors.white,
  backgroundSecondary: colors.white,
  checkbox: colors.light_grey,
  checkboxHover: colors.main_purple,
  color: colors.black,
  labelcolor: colors.medium_grey,
  // BUTTON
  buttonColorMap,
  primaryButton: colors.main_purple,
  secondaryButton: `${opacquer(colors.main_purple, 0.1)}`,
  destructiveButton: colors.red,
  //INPUT
};

export const darkTheme = {
  name: "DARK",
  background: colors.dark_grey,
  backgroundSecondary: colors.very_dark_grey,
  checkbox: colors.very_dark_grey,
  checkboxHover: colors.main_purple,
  color: colors.white,
  labelcolor: colors.white,

  //BUTTON
  buttonColorMap,
  primaryButton: colors.main_purple,
  secondaryButton: `${opacquer(colors.main_purple, 0.1)}`,
  destructiveButton: colors.red,
};

type theme = typeof lightTheme;

export type { theme };
