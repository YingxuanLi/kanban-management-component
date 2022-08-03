import React from 'react'
import styled from 'styled-components';
type Props = {
  label: string
}


const TextInputWrapper=styled.div`
  display: inline-flex;
  flex-wrap:nowrap;
  flex-direction: column;
  .label{
    font-family: Plus Jakarta Sans;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: left;
    color: rgba(130, 143, 163, 1);
    margin:2px;
  }
`
const Input = styled.input.attrs({type:"text"})`
    border: 1px solid rgba(130, 143, 163, 0.25);
    height: 40px;
    width: 350px;
    left: 0px;
    top: 0px;
    border-radius: 4px;

    font-family: "Plus Jakarta Sans";
    font-size: 13px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0px;
    text-align: left;

    &:focus{
      outline: none;
      color: linear-gradient(0deg, #EA5555, #EA5555),
      linear-gradient(0deg, #FFFFFF, #FFFFFF);
      &:invalid{
        border: 1px solid red;
      }
    }
`

const TextInputDiv =styled.div`
    &:after{
          content: attr(data-required);
          border: 1px solid rgba(130, 143, 163, 0.25);
          position: relative;
          left: -100px;
          visibility: hidden;
    }
`

function TextInput(props: Props) {
  return (
    <TextInputWrapper>
        <label htmlFor="textInput" className='label'>{props.label}</label>
        <TextInputDiv data-required="(required)">
        <Input id="textInput" type="text" placeholder={"Enter task name"} required/></TextInputDiv>
    </TextInputWrapper>
  )
}

export default TextInput