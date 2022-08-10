/// <reference types="react" />
declare type Props = {
  options: {
    value: string;
    label: string;
  }[];
  onChange: () => void;
  name: string;
};
declare const Dropdown: (dropdownProps: Props) => JSX.Element;
export default Dropdown;
