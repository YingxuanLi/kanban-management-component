/// <reference types="react" />
declare type TextInputProps = {
  label: string;
  variant: "light" | "dark";
};
declare function TextInput(textInputProps: TextInputProps): JSX.Element;
export default TextInput;
