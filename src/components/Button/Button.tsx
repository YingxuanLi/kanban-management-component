import styled from "styled-components";
import { IconBoard, IconShowSidebar } from "icons";
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
  position: relative;
  /* clip-path: polygon(80% 0%, 100% 0, 100% 100%, 80% 100%); */
`;

const IconBoardStyle = {
  margin: "0px 5px 0px 5px",
  backgroundSize: "12px 12px",
};
const ShowSidebarStyle = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
const Wrapper = styled.div`
  display: flex;
  height: "100vh";
  flex-direction: "column";
  align-items: center;
  justify-content: center;
  background-color: red;
`;

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
      <Wrapper>
        {defaultshowIcons && (
          <IconBoard
            style={IconBoardStyle}
            dimension={IconDimension}
            color={IconColor}
          />
        )}
        <span>{label}</span>
      </Wrapper>
      <ShowSidebarStyle>
        <IconShowSidebar style={{ marginRight: "10px" }} />
      </ShowSidebarStyle>
    </StyledButton>
  );
}
