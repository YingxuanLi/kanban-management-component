import styled from "styled-components";

type Props = {
  status: "idle" | "completed";
  label: string;
};

const StyledCheckbox = styled.div`
  width: 350px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.checkbox};
  &:hover {
    background-color: rgba(99, 95, 199, 0.25);
  }
  Input:after {
    text-decoration: line-through;
  }
`;
const Input = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 16px;
  height: 16px;
  margin: 12px;
  border-color: rgba(130, 143, 163, 0.25);
  box-shadow: none;
  outline: 1px solid rgba(130, 143, 163, 0.25);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 2px;
  &:hover {
    color: ${(props) => props.theme.checkboxHover};
    box-shadow: 0 0 20px #007a7e;
  }
  &:checked {
    background-color: rgba(99, 95, 199, 1);
  }
`;

const Label = styled.span`
  font-size: 12px;
  width: 22px;
  height: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: left;
  color: ${(props) => props.theme.color};
  ${Input}:checked + & {
    text-decoration: line-through;
    opacity: 50%;
  }
`;

export default function CheckBox(CheckBoxProps: Props) {
  const { label } = CheckBoxProps;
  return (
    <StyledCheckbox>
      <Input id="default-checkbox" type="checkbox" />
      <Label>{label}</Label>
    </StyledCheckbox>
  );
}
