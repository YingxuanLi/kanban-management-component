/// <reference types="react" />
declare type DropdownProps = {
  options: {
    value: string;
    label: string;
  }[];
  onChange: () => void;
  name: string;
  variant: "light" | "dark";
};
declare const Dropdown: (dropdownProps: DropdownProps) => JSX.Element;
export default Dropdown;
