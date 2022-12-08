import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './Header';

export default {
  title: 'common/components/Header',
  conponent: Header,
  parameters: {
    design: {
      url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=130%3A183&t=3hP4bJffz0wUv8Y4-4',
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Guest = Template.bind({});
Guest.args = {
  isLogin: false,
};

export const Member = Template.bind({});
Member.args = {
  isLogin: true,
};
