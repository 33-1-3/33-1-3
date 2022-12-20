import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProfileLink from './ProfileLink';

export default {
  title: 'common/components/ProfileLink',
  component: ProfileLink,
} as ComponentMeta<typeof ProfileLink>;

const Template: ComponentStory<typeof ProfileLink> = (args) => (
  <ProfileLink {...args} />
);

export const User = Template.bind({});
User.args = {
  width: 40,
  height: 40,
};
User.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=130%3A344&t=ri42uDzp7Wjgw7vi-4',
  },
};

export const Default = Template.bind({});
Default.args = {
  width: 40,
  height: 40,
};
Default.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=130%3A342&t=ri42uDzp7Wjgw7vi-4',
  },
};
