import TaskCard from "./TaskCard";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "TaskCardComponent",
  component: TaskCard,
} as ComponentMeta<typeof TaskCard>;

const Template: ComponentStory<typeof TaskCard> = (args) => (
  <TaskCard {...args} />
);

export const TaskCardComponent = Template.bind({});

TaskCardComponent.args = {
  taskName: "Build UI for onboarding flow",
  subTaskInfo: "0 of 3 substasks",
};
