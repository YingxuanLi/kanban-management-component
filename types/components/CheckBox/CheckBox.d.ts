/// <reference types="react" />
import "./CheckBox.css";
declare type Props = {
  status: "idle" | "completed";
  label: string;
  variant: "light" | "dark";
};
export default function CheckBox(CheckBoxProps: Props): JSX.Element;
export {};
