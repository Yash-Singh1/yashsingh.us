import React from 'react';
import More from './More';

export default {
  title: 'More',
  component: More
};

const Template = (args) => <More {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <p className='text-white text-center'>A bunch of cool stuff that was previously hidden</p>
};
