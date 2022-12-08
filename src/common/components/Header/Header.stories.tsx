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

export const Ver1 = Template.bind({});
Ver1.args = {
  isLogin: false,
};

export const Ver2 = Template.bind({});
Ver2.args = {
  isLogin: true,
};

export const Ver3 = Template.bind({});
Ver3.args = {
  isLogin: false,
};

export const Ver4 = Template.bind({});
Ver4.args = {
  isLogin: true,
};
