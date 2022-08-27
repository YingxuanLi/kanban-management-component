import ShowSidebar from "./ShowSidebar";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "ShowSidebarComponent",
  component: ShowSidebar,
} as ComponentMeta<typeof ShowSidebar>;

const Template: ComponentStory<typeof ShowSidebar> = (args: any) => (
  <ShowSidebar {...args} />
);

export const ShowSidebarComponent = Template.bind({});

ShowSidebarComponent.args = {
  label: "Button",
  buttonType: "primary",
  showIcons: true,
};
