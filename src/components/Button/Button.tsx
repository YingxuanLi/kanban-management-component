import styled from "styled-components";
import { colors } from "../../styles/theme-preval";

const StyledButton = styled.button<{ buttonType: string; size: string }>`
  height: ${(props) => (props.size === "small" ? "40px" : "48px")};
  width: 255px;
  font-weight: 700;
  border: none;
  border-radius: ${(props) => (props.size === "small" ? "20px" : "24px")};
  background-color: ${(props) =>
    props.theme.buttonBackgroundMap[props.buttonType].idel};
  color: ${(props) =>
    props.buttonType === "secondary" ? colors.main_purple : colors.white};
  size: ${(props) => (props.size === "small" ? "13px" : "15px")};
  line-height: ${(props) => (props.size === "small" ? "23px" : "18.9px")};
  &:hover {
    background-color: ${(props) =>
      props.theme.buttonBackgroundMap[props.buttonType].hover};
  }
`;

type ButtonProps = {
  label: string;
  buttonType: "primary" | "secondary" | "destructive";
  size: "small" | "large";
};

export default function Button(buttonProps: ButtonProps) {
  const { buttonType, label, size } = buttonProps;

  return (
    <StyledButton buttonType={buttonType} size={size}>
      {label}
    </StyledButton>
  );
}
