import TextInput from './TextInput';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PropTypes from 'prop-types';

export default {
    title: 'TextInput',
    component: TextInput
  } 

 const Template = (args:{label:string}) => <TextInput {...args} />;

 //👇 Each story then reuses that template
 export const TextInputSample = Template.bind({});
TextInputSample.args ={
  label:'labeltext'
}