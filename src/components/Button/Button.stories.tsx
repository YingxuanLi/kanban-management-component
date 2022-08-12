import Buttons from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Buttons",
  component: Buttons,
} as ComponentMeta<typeof Buttons>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Buttons> = (args) => (
  <Buttons {...args} />
);

export const ButtonPrimaryL = Template.bind({});
// MyComponent.stories.js|jsx|ts|tsx

ButtonPrimaryL.args = {
  label: "ButtonPrimaryL",
};
