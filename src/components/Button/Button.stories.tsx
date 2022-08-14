import Buttons from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: Buttons,
} as ComponentMeta<typeof Buttons>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Buttons> = (args) => (
  <Buttons {...args} />
);

export const Button = Template.bind({});
Button.args = {
  label: "Button",
  buttonType: "primary",
};
