import React from 'react';
import Progress from './Progress';
import '../../styles/index.css';
import '../../styles/profile.css';

export default {
  title: 'Progress',
  component: Progress
};

const Template = (args) => (
  <div id='skills-list'>
    <Progress {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  skill: 'JavaScript',
  percent: 100,
  animate: true
};
