// export interface ThemeProps {
//   background: string;
//   text: string;
// }

// export const darkTheme: ThemeProps = {
//   background: "var(--dark-background)",
//   text: "var(--dark-text)",
// };

import { colors, fontSize } from "./theme-preval";
import { addAlpha } from "./theme-preval";

export type ThemeType = typeof lightTheme;

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
const buttonColorMap: Record<string, any> = {
  primary: {
    idel: colors.main_purple,
    hover: colors.main_purple_hover,
  },
  secondary: {
    idel: `${addAlpha(colors.main_purple, 0.1)}`,
    hover: `${addAlpha(colors.main_purple, 0.25)}`,
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
  secondaryButton: `${addAlpha(colors.main_purple, 0.1)}`,
  destructiveButton: colors.red,
  //INPUT
};

export const darkTheme: ThemeType = {
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
  secondaryButton: `${addAlpha(colors.main_purple, 0.1)}`,
  destructiveButton: colors.red,
};

const theme = lightTheme; // set the light theme as the default.
export default theme;
