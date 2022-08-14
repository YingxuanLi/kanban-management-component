/// <reference types="react" />
declare type ButtonProps = {
  label: string;
  buttonType: "primary" | "secondary" | "destructive";
  size: "S" | "L";
};
export default function Button(buttonProps: ButtonProps): JSX.Element;
export {};
