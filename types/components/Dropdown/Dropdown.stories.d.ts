/// <reference types="react" />
import { ComponentStory, ComponentMeta } from "@storybook/react";
declare const _default: ComponentMeta<
  (dropdownProps: {
    options: {
      value: string;
      label: string;
    }[];
    onChange: () => void;
    name: string;
  }) => JSX.Element
>;
export default _default;
export declare const DropdownComponent: ComponentStory<
  (dropdownProps: {
    options: {
      value: string;
      label: string;
    }[];
    onChange: () => void;
    name: string;
  }) => JSX.Element
>;
