import styled from "styled-components";
import { colors } from "../../styles/theme-preval";

const StyledButton = styled.button<{ buttonType: string }>`
  height: 40px;
  width: 255px;
  left: 0px;
  top: 0px;
  border-radius: 20px;
  background-color: ${(props) =>
    props.theme.buttonColorMap[props.buttonType].idel};
`;

type ButtonProps = {
  label: string;
  buttonType: "primary" | "secondary" | "destructive";
  size: "S" | "L";
};

export default function Button(buttonProps: ButtonProps) {
  const { buttonType } = buttonProps;

  return <StyledButton buttonType={buttonType}>button</StyledButton>;
}
