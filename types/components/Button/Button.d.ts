/// <reference types="react" />
declare type ButtonProps = {
  label: string;
  variant: "light" | "dark";
};
export default function Button(buttonProps: ButtonProps): JSX.Element;
export {};
