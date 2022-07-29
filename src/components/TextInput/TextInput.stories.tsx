import TextInput from './TextInput';
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
    title: 'TextInput',
    component: TextInput,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as ComponentMeta<typeof TextInput>;


  const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

  export const Idle= Template.bind({});

  Idle.args = {
  }