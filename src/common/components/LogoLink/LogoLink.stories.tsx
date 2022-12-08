import { ComponentStory, ComponentMeta } from '@storybook/react';
import LogoLink from './LogoLink';

export default {
  title: 'common/components/LogoLink',
  component: LogoLink,
  parameters: {
    design: {
      url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=129%3A28&t=ri42uDzp7Wjgw7vi-4',
    },
  },
} as ComponentMeta<typeof LogoLink>;

const Template: ComponentStory<typeof LogoLink> = (args) => (
  <LogoLink {...args} />
);

export const Large = Template.bind({});
Large.args = {
  width: '132px',
  height: '72px',
};

export const Small = Template.bind({});
Small.args = {
  width: '74px',
  height: '40px',
};
