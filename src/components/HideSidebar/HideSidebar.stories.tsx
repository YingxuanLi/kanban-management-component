import HideSidebar from "./HideSidebar";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "HideSidebarComponent",
  component: HideSidebar,
} as ComponentMeta<typeof HideSidebar>;

const Template: ComponentStory<typeof HideSidebar> = (args: any) => (
  <HideSidebar {...args} />
);

export const HideSidebarComponent = Template.bind({});

HideSidebarComponent.args = {};
