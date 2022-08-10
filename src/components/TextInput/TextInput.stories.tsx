import TextInput from "./TextInput";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

export default {
  title: "TextInputComponent",
  component: TextInput,
};

const Template: ComponentStory<typeof TextInput> = (args: any) => (
  <TextInput {...args} />
);

//👇 Each story then reuses that template
export const TextInputComponent = Template.bind({});
TextInputComponent.args = {
  label: "labeltext",
};
