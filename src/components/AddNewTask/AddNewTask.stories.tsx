import AddNewTask from "./AddNewTask";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "AddNewTaskComponent",
  component: AddNewTask,
} as ComponentMeta<typeof AddNewTask>;

const Template: ComponentStory<typeof AddNewTask> = (args) => <AddNewTask />;

export const AddNewTaskComponent = Template.bind({});

AddNewTaskComponent.args = {};
