import CheckBox from "./CheckBox";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "CheckBoxComponent",
  component: CheckBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      options: ["dark", "light"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
);

export const CheckBoxComponent = Template.bind({});

CheckBoxComponent.args = {
  status: "idle",
  label: "checkbox",
};
