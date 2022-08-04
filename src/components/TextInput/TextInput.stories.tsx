import TextInput from './TextInput';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PropTypes from 'prop-types';

export default {
    title: 'TextInputComponent',
    component: TextInput
  } 

 const Template = (args:any) => <TextInput {...args} />;

 //👇 Each story then reuses that template
 export const TextInputComponent = Template.bind({});
TextInputComponent.args ={
  label:'labeltext'
}
