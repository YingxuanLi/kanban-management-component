import styled from "styled-components";
import { IconBoard } from "icons";
import { colors } from "styles/theme-preval";

const StyledButton = styled.button<{ buttonType: string; small?: boolean }>`
  height: ${(props) => (props.small ? "40px" : "48px")};
  width: 255px;
  font-weight: 700;
  border: none;
  border-radius: ${(props) => (props.small ? "20px" : "24px")};
  background-color: ${(props) =>
    props.theme.buttonBackgroundMap[props.buttonType].idel};
  color: ${(props) =>
    props.buttonType === "secondary" ? colors.main_purple : colors.white};
  size: ${(props) => (props.small ? "13px" : "15px")};
  line-height: ${(props) => (props.small ? "23px" : "18.9px")};
  &:hover {
    background-color: ${(props) =>
      props.theme.buttonBackgroundMap[props.buttonType].hover};
  }
  align-items: center;
`;

const IconBoardStyle = {
  margin: "0px 5px 0px 5px",
  backgroundSize: "12px 12px",
};

const WrapperStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

interface ButtonProps {
  label: string;
  buttonType: "primary" | "secondary" | "destructive";
  small?: boolean;
  showIcons?: boolean;
  className?: string;
}

export default function Button(buttonProps: ButtonProps) {
  const { buttonType, label, showIcons, className, small } = buttonProps;
  const IconDimension = small ? 13 : 15;
  const IconColor =
    buttonType === "secondary" ? colors.main_purple : colors.white;
  const defaultshowIcons = showIcons !== undefined ? showIcons : false;

  return (
    <StyledButton buttonType={buttonType} className={className} small={small}>
      <div style={WrapperStyle}>
        {defaultshowIcons && (
          <IconBoard
            style={IconBoardStyle}
            dimension={IconDimension}
            color={IconColor}
          />
        )}
        <span>{label}</span>
      </div>
    </StyledButton>
  );
}
