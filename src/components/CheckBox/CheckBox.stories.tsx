import CheckBox from "./CheckBox";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "CheckBox",
  component: CheckBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
);

export const Idle = Template.bind({});

Idle.args = {
  version: "Light",
  subTask: "Idle",
};
