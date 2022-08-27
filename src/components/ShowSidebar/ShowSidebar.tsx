import styled from "styled-components";
import { IconShowSidebar } from "icons";
import { colors } from "styles/theme-preval";

const StyledButton = styled.button<{ buttonType: string; small?: boolean }>`
  height: 48px;
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
  clip-path: polygon(80% 0%, 100% 0, 100% 100%, 80% 100%);
`;

const ShowSidebarStyle = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

interface ButtonProps {
  label: string;
  buttonType: "primary" | "secondary" | "destructive";
  small?: boolean;
  showIcons?: boolean;
  className?: string;
}

export default function Button(buttonProps: ButtonProps) {
  const { buttonType, className, small } = buttonProps;

  return (
    <StyledButton buttonType={buttonType} className={className} small={small}>
      <ShowSidebarStyle>
        <IconShowSidebar style={{ marginRight: "10px" }} />
      </ShowSidebarStyle>
    </StyledButton>
  );
}
