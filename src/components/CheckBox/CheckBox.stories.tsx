import CheckBox from "./CheckBox";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "CheckBoxComponent",
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
);

export const CheckBoxComponent = Template.bind({});

CheckBoxComponent.args = {
  status: "idle",
  label: "checkbox",
};
