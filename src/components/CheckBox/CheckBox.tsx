import "./CheckBox.css";
import styled from "styled-components";
// import StyledCheckbox from './CheckBox.css';
type Props = {
  version: "Light" | "Dark";
  status: "idle" | "completed";
  label: string;
};

const StyledCheckbox = styled.div`
  width: 350px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  background-color: #f4f7fd;
  &:hover {
    background-color: rgba(99, 95, 199, 0.25);
  }
  Input:after {
    text-decoration: line-through;
  }
`;
const Input = styled.input.attrs({ type: "checkbox" })`
  width: 16px;
  height: 16px;
  margin: 12px;
  border: 0;
  border-color: 0;
  box-shadow: none;
  outline: 1px solid rgba(130, 143, 163, 0.25);
  background-color: linear-gradient(0deg, #ffffff, #ffffff);
  border-radius: 2px;
  &:checked {
    color: rgba(99, 95, 199, 1);
  }
`;

const Label = styled.span`
  font-size: 12px;
  width: 22px;
  height: 15px;
  font-weight: 700;
  font-family: "Plus Jakarta Sans";
     line-height: 15px;
  letter-spacing: 0px;
  text-align: left;
  ${Input}:checked {
    text-decoration: line-through;
    color: rgba(0, 1, 18, 0.5);
  }
`;

export default function CheckBox(CheckBoxProps: Props) {
  const { label } = CheckBoxProps;
  return (
    <div>
      <StyledCheckbox>
        <Input id="default-checkbox" type="checkbox" />
        <Label>{label}</Label>
      </StyledCheckbox>
    </div>
  );
}
