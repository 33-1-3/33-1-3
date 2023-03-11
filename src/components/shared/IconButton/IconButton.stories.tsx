import { ComponentStory, ComponentMeta } from '@storybook/react';

import IconButton from './IconButton';

export default {
  title: 'common/components/IconButton',
  component: IconButton,
  argTypes: {},
  parameters: {
    design: {
      url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=177%3A552&t=ri42uDzp7Wjgw7vi-4',
    },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Small = Template.bind({});
Small.args = {
  width: 16,
  height: 16,
  iconType: 'plus',
  color: 'var(--purple-900)',
  backgroundColor: 'var(--white)',
  handleClick: () => console.log('Plus icon clicked'),
};

export const Regular = Template.bind({});
Regular.args = {
  width: 28,
  height: 28,
  iconType: 'plus',
  color: 'var(--purple-900)',
  backgroundColor: 'var(--white)',
  handleClick: () => console.log('Plus icon clicked'),
};

export const Large = Template.bind({});
Large.args = {
  width: 32,
  height: 32,
  iconType: 'plus',
  color: 'var(--purple-900)',
  backgroundColor: 'var(--white)',
  handleClick: () => console.log('Plus icon clicked'),
};
