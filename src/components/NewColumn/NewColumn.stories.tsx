import NewColumn from "./NewColumn";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "NewColumnComponent",
  component: NewColumn,
} as ComponentMeta<typeof NewColumn>;

const Template: ComponentStory<typeof NewColumn> = (args: any) => (
  <NewColumn {...args} />
);

export const NewColumnComponent = Template.bind({});

NewColumnComponent.args = {};
