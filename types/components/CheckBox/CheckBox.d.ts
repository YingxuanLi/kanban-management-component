/// <reference types="react" />
import "./CheckBox.css";
declare type Props = {
  version: "Light" | "Dark";
  status: "idle" | "completed";
  label: string;
};
export default function CheckBox(CheckBoxProps: Props): JSX.Element;
export {};
