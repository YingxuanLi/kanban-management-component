import ToggleSwitch from "./ToggleSwitch";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "ToggleSwitchComponent",
  component: ToggleSwitch,
};

const Template: ComponentStory<typeof ToggleSwitch> = (args: any) => (
  <ToggleSwitch {...args} />
);

//👇 Each story then reuses that template
export const ToggleSwitchComponent = Template.bind({});
ToggleSwitchComponent.args = {};
