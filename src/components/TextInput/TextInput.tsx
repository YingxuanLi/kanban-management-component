import React from "react";
import styled from "styled-components";
type Props = {};

const TextInputWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-direction: column;
  .label {
    font-family: Plus Jakarta Sans;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: left;
    color: rgba(130, 143, 163, 1);
    margin: 2px;
  }
`;

const Input = styled.input.attrs({ type: "text" })`
  border: 1px solid rgba(130, 143, 163, 0.25);
  height: 40px;
  width: 350px;
  left: 0px;
  top: 0px;
  border-radius: 4px;
  //styleName: Body (L);
  font-family: "Plus Jakarta Sans";
  font-size: 13px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: left;
  /* &:active{
      outline: none;
      border: 1px solid rgba(234, 85, 85, 1);
      color: linear-gradient(0deg, #EA5555, #EA5555),
      linear-gradient(0deg, #FFFFFF, #FFFFFF);
    } */
  &:focus {
    outline: none;
    color: linear-gradient(0deg, #ea5555, #ea5555),
      linear-gradient(0deg, #ffffff, #ffffff);
    &:invalid {
      border: 1px solid yellow;
    }
  }
`;

const errorMessage = styled.span`
  color: red;
`;
function TextInput({}: Props) {
  return (
    <TextInputWrapper>
      <label htmlFor="textInput" className="label">
        TextField
      </label>
      <Input
        id="textInput"
        type="text"
        placeholder={"Enter task name"}
        required
      />
      <div></div>
    </TextInputWrapper>
  );
}

export default TextInput;
