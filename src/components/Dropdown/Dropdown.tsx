import { useState, useRef } from "react";
import styled from "styled-components";
import Select from "react-select";

const StyledSelect = styled(Select)`
  font-size: 13px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: left;
  /* border: 1px solid rgba(130, 143, 163, 0.25); */
  /* border: 1px solid red; */
  height: 40px;
  width: 350px;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  font-family: Plus Jakarta Sans;
  left: 0px;
  top: 0px;
`;
const Label = styled.div`
  font-family: Plus Jakarta Sans;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: left;
  margin: 2px;
  font-family: Plus Jakarta Sans;
  color: #828fa3;
`;
const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    color: "#828FA3",
    fontWeight: state.isSelected ? "bold" : "normal",
    backgroundColor: "none",
    border: null,
    ":active": {
      backgroundColor: state.isDisabled
        ? "white"
        : state.isSelected
        ? "white"
        : state.isFocused
        ? "white"
        : "red",
    },
  }),
};

type Props = {
  options: {
    value: string;
    label: string;
  }[];
  onChange: () => void;
  name: string;
};

const Dropdown = (dropdownProps: Props) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      {dropdownProps.options ? (
        <SelectWrapper>
          <Label>{dropdownProps.name}</Label>

          <StyledSelect
            styles={customStyles}
            defaultValue={selectedOption}
            options={dropdownProps.options}
          />
        </SelectWrapper>
      ) : null}
    </>
  );
};

export default Dropdown;
