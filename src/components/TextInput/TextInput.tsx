import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { BodyL } from "../../styles/styles";
import { themes as themes } from "../../styles/themes";
import { Label } from "../../styles/styles";
type TextInputProps = {
  label: string;
  variant: "light" | "dark";
};

const TextInputWrapper = styled.div`
  flex-wrap: wrap;
  flex-direction: column;
  /* .label {
    font-family: Plus Jakarta Sans;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: left;
    color: rgba(130, 143, 163, 1);
    margin: 2px;
  } */
`;
const Input = styled.input.attrs({ type: "text" })`
  border: 1px solid rgba(130, 143, 163, 0.25);
  height: 40px;
  width: 350px;
  left: 0px;
  top: 0px;
  border-radius: 4px;
  display: "inline-block";
  color: black;
  &:focus {
    outline: none;
    color: linear-gradient(0deg, #ea5555, #ea5555);
    &:invalid {
      border: 1px solid red;
      &::placeholder {
        opacity: 25%;
      }
    }
  }
  &::placeholder {
    //styleName: Body (L);
    font-family: Plus Jakarta Sans;
    font-size: 13px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0px;
    text-align: left;
    color: black;
  }
`;

const TextInputDiv = styled.div`
  &:after {
    content: attr(data-required);
    border: 1px solid rgba(130, 143, 163, 0.25);
    position: relative;
    left: -100px;
    visibility: hidden;
  }
`;

function TextInput(textInputProps: TextInputProps) {
  const { variant } = textInputProps;
  const theme = variant === "light" ? themes.light : themes.dark;
  return (
    <>
      <ThemeProvider theme={theme}>
        <TextInputWrapper>
          <Label className="label" style={{ color: theme.labelcolor }}>
            {textInputProps.label}
          </Label>
          <TextInputDiv data-required="(required)">
            <Input
              id="textInput"
              type="text"
              placeholder={"Enter task name"}
              required
            />
          </TextInputDiv>
        </TextInputWrapper>
      </ThemeProvider>
    </>
  );
}

export default TextInput;
