import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryL = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryL.args = {
  // primary: true,
  label: 'buttonPrimary(L)',
  version: 'primarylg',

};


export const PrimaryS = Template.bind({});
PrimaryS.args = {
  label: 'buttonPrimary(S)',
  version: 'primarysm',
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'button Secondary',
  version: 'secondary',
};

export const Destructive = Template.bind({})
Destructive.args ={
  label: 'button Destructive',
  version: "destructive",
}