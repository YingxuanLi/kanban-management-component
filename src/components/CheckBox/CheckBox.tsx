
import './CheckBox.css';
import styled from 'styled-components';

type Props = {
  version: "Light" | "Dark";
  status: "idle" | "completed";
  label: string;
};

const StyledCheckbox = styled.div`
  height: 40px;
  width: 350px;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: column;
  background-color: #f4f7fd;
  justify-content: center;
  align-content: flex-start;
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

const Label = styled.div`
  overflow-wrap: break-word;
  font-size: 12px;
  font-weight: 700;
  font-family: "Plus Jakarta Sans";
  line-height: 15px;
  align-self: center;
  letter-spacing: 0px;
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
