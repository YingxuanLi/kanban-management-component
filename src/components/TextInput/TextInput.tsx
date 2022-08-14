import React from "react";
import styled from "styled-components";
import { BodyL } from "../../styles/styles";
import { Label } from "../../styles/styles";
type TextInputProps = {
  label: string;
};

const TextInputWrapper = styled.div`
  flex-wrap: wrap;
  flex-direction: column;
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

const TextInputLabel = styled(Label)`
  color: ${(props) => props.theme.labelcolor};
`;

function TextInput(textInputProps: TextInputProps) {
  return (
    <>
      <TextInputWrapper>
        <TextInputLabel className="label">
          {textInputProps.label}
        </TextInputLabel>
        <TextInputDiv data-required="(required)">
          <Input
            id="textInput"
            type="text"
            placeholder={"Enter task name"}
            required
          />
        </TextInputDiv>
      </TextInputWrapper>
    </>
  );
}

export default TextInput;
