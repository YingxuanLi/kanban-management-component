import { colors, fontSize } from "./theme-preval";
import { addAlpha } from "./theme-preval";

interface IButtonColor {
  idel: string;
  hover: string;
}

export type ThemeType = typeof lightTheme;

const buttonBackgroundMap: Record<string, IButtonColor> = {
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
  buttonBackgroundMap,

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
  buttonBackgroundMap,
};

const theme = lightTheme; // set the light theme as the default.
export default theme;
