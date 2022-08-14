/// <reference types="react" />
declare type DropdownProps = {
  options: {
    value: string;
    label: string;
  }[];
  onChange: () => void;
  name: string;
};
declare const Dropdown: (dropdownProps: DropdownProps) => JSX.Element;
export default Dropdown;
