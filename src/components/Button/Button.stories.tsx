import  { Button }  from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
    title: 'Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as ComponentMeta<typeof Button>;


  const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

     const Primary = Template.bind({});
  Primary.args = {variant: 'primary', label: 'primaryButton'}


