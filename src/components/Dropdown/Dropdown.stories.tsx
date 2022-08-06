import Dropdown from "./Dropdown";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "DropdownComponent",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const DropdownComponent = Template.bind({});

DropdownComponent.args = {
  options: [
    { value: "done", label: "done" },
    { value: "doing", label: "doing" },
    { value: "todo", label: "todo" },
  ],
  name: "Dropdown",
};
