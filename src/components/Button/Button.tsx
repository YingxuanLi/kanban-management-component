import styled from "styled-components";
import { IconBoard } from "icons";
import { colors } from "styles/theme-preval";

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
  align-items: center;
`;

const IconBoardStyle = {
  margin: "0px 5px 0px 5px",
  backgroundSize: "12px 12px",
};

const Wrapper = styled.div`
  display: "flex";
  alignitems: "center";
  justifycontent: "center";
`;

interface ButtonProps {
  label: string;
  buttonType: "primary" | "secondary" | "destructive";
  size: "small" | "large";
  showIcons?: boolean;
}

export default function Button(buttonProps: ButtonProps) {
  const { buttonType, label, size, showIcons } = buttonProps;
  const IconDimension = size === "small" ? 13 : 15;
  const IconColor =
    buttonType === "secondary" ? colors.main_purple : colors.white;
  const defaultshowIcons =
    buttonProps.showIcons !== undefined ? buttonProps.showIcons : false;

  return (
    <StyledButton buttonType={buttonType} size={size}>
      <Wrapper>
        {defaultshowIcons ? (
          <IconBoard
            style={IconBoardStyle}
            dimension={IconDimension}
            color={IconColor}
          />
        ) : null}
        <span>{label}</span>
      </Wrapper>
    </StyledButton>
  );
}
