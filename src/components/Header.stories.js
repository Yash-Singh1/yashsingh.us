import React from 'react';
import Header from './Header';
import '../styles/index.css';

export default {
  title: 'Header',
  component: Header
};

const Template = (args) => <Header {...args} />;

export const Profile = Template.bind({});
Profile.args = {
  intro: "It's",
  title: 'Saiansh (Yash) Singh'
};
