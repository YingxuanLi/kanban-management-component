import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../src/styles/themes";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: "#F2F2F2",
      },
      {
        name: "dark",
        value: "#2B2C37",
      },
    ],
  },
};

// The default value of the theme arg to all stories
const themes = [darkTheme, lightTheme];
addDecorator(withThemesProvider(themes), ThemeProvider);
