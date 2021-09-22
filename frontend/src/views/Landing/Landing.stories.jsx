import React from 'react';
import Landing from './Landing';

export default {
  title: 'Views/Landing',
  component: Landing,
};

const Template = args => <Landing {...args}/>

export const Default = Template.bind({})
Default.args = {
  
}
