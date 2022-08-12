import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { themes as themes } from "../../styles/themes";

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.background};
`;

type ButtonProps = {
  label: string;
  variant: "light" | "dark";
};

export default function Button(buttonProps: ButtonProps) {
  const { variant } = buttonProps;
  const theme = variant === "light" ? themes.light : themes.dark;

  return (
    <ThemeProvider theme={theme}>
      <StyledButton>button</StyledButton>
    </ThemeProvider>
  );
}
