import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArrowLink from './BackButton';

export default {
  title: 'pages/Item/ArrowLink',
  component: ArrowLink,
  parameters: {
    design: {
      url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=181%3A1244&t=ri42uDzp7Wjgw7vi-4',
    },
  },
} as ComponentMeta<typeof ArrowLink>;

const Template: ComponentStory<typeof ArrowLink> = (args) => (
  <ArrowLink {...args} />
);

export const Default = Template.bind({});
Default.args = {};
