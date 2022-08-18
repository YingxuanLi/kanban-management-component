import styled, { useTheme } from "styled-components";
import SvgIconLightTheme from "../../../icons/IconLightTheme";
import SvgIconDarkTheme from "../../../icons/IconDarkTheme";
import { useState } from "react";
import theme from "../../styles/themes";
import { lightTheme, darkTheme } from "../../styles/themes";
const ToggleSwitchBox = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 20px;
  background-color: ${(props) => props.theme.backgroundTertiary};
  height: 48px;
  width: 251px;
  left: 24px;
  top: 888px;
  border-radius: 6px;
  align-items: center;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
const Swicth = styled.div`
  display: flex;
  width: 40px;
  height: 20px;
  background: #635fc7;
  border-radius: 12px;
  justify-content: flex-start;
  justify-items: center;
  top: auto;
  left: auto;
  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 35px;
    background: white;
    align-self: center;
    margin: 0px 3px 0px 3px;
  }
`;

const Input = styled.input`
  position: absolute;
  display: none;

  &:checked + ${Swicth} {
    background-color: #635fc7;
    /* justify-content: flex-end; */
    &:before {
      animation-duration: 3s;
      transform: translate(20px);
    }
  }
  &:checked + ${ToggleSwitchBox} {
  }
`;

// interface ToggleSwitchProps {
//     setTheme: React.Dispatch<React.SetStateAction<typeof theme>>;
// }

const ToggleSwitch = () => {
  const currentTheme = useTheme();
  const themeAfterSwitch =
    currentTheme.name === "DARK" ? lightTheme : darkTheme;
  console.log(theme);
  // toggleSwitchProps: {
  //     function switchTheme(){
  //         toggleSwitchProps.setTheme(themeAfterSwitch);
  //     }
  // }
  return (
    <ToggleSwitchBox>
      <SvgIconLightTheme dimension={14} color="#828FA3" />
      <Label>
        <Input type="checkbox" />
        <Swicth />
      </Label>

      <SvgIconDarkTheme dimension={14} color="#828FA3" />
      {/* <button onClick={switchTheme}></button> */}
    </ToggleSwitchBox>
  );
};

export default ToggleSwitch;
