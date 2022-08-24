import TaskInfoCard from "./TaskInfoCard";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "TaskInfoCardComponent",
  component: TaskInfoCard,
} as ComponentMeta<typeof TaskInfoCard>;

const Template: ComponentStory<typeof TaskInfoCard> = (args: any) => (
  <TaskInfoCard {...args} />
);

export const TaskInfoCardComponent = Template.bind({});

TaskInfoCardComponent.args = {};
