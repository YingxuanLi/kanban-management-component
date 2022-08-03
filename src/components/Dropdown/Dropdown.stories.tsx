import Dropdown from './Dropdown';
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
    title: 'Dropdown',
    component: Dropdown,
  } as ComponentMeta<typeof Dropdown>;


  const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

  export const Idle= Template.bind({});

  Idle.args = {
    options:[{value:"done",label:"done"},{value:"doing",label:"doing"},{value:"todo",label:"todo"}],
    name: 'Dropdown'
  }