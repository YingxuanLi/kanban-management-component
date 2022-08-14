export declare type ThemeType = typeof lightTheme;
export declare const themes: {
  light: {
    background: string;
    backgroundSecondary: string;
    checkbox: string;
    checkboxHover: string;
    color: string;
    labelcolor: string;
  };
  dark: {
    background: string;
    backgroundSecondary: string;
    checkbox: string;
    checkboxHover: string;
    color: string;
    labelcolor: string;
  };
};
export declare const lightTheme: {
  name: string;
  background: string;
  backgroundSecondary: string;
  checkbox: string;
  checkboxHover: string;
  color: string;
  labelcolor: string;
  buttonColorMap: {
    primary: {
      idel: string;
      hover: string;
    };
    secondary: {
      idel: string;
      hover: string;
    };
    destructive: {
      idel: string;
      hover: string;
    };
  };
  primaryButton: string;
  secondaryButton: string;
  destructiveButton: string;
};
export declare const darkTheme: ThemeType;
declare const theme: {
  name: string;
  background: string;
  backgroundSecondary: string;
  checkbox: string;
  checkboxHover: string;
  color: string;
  labelcolor: string;
  buttonColorMap: {
    primary: {
      idel: string;
      hover: string;
    };
    secondary: {
      idel: string;
      hover: string;
    };
    destructive: {
      idel: string;
      hover: string;
    };
  };
  primaryButton: string;
  secondaryButton: string;
  destructiveButton: string;
};
export default theme;
