import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Contacts from './Contacts';

export default {
  title: 'Contacts',
  component: Contacts,
  argTypes: {
    contacts: {
      description: 'Array of contacts that should be rendered',
      defaultValue: []
    },
    className: {
      description: 'Extra class names to put into the wrapper element',
      defaultValue: ''
    }
  }
} as ComponentMeta<typeof Contacts>;

const Template: ComponentStory<typeof Contacts> = (args) => <Contacts {...args} />;

export const Default = Template.bind({});
Default.args = {
  contacts: [],
  className: ''
};
