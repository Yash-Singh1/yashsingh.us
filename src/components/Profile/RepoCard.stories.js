import React from 'react';
import RepoCard from './RepoCard';

export default {
  title: 'RepoCard',
  component: RepoCard
};

const Template = (args) => <RepoCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  repo: 'Yash-Singh1/yashsingh.us'
};
