// export interface ThemeProps {
//   background: string;
//   text: string;
// }

// export const darkTheme: ThemeProps = {
//   background: "var(--dark-background)",
//   text: "var(--dark-text)",
// };

import { colors, fontSize } from "./theme-preval";

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
