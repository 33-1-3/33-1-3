import { ComponentStory, ComponentMeta } from '@storybook/react';
import SquareLink from './SquareLink';

export default {
  title: 'common/components/Link',
  component: SquareLink,
} as ComponentMeta<typeof SquareLink>;

const Template: ComponentStory<typeof SquareLink> = (args) => (
  <SquareLink {...args} />
);

export const Prime = Template.bind({});
Prime.args = {
  link: '/',
  width: 178,
  height: 40,
  children: 'My Collections',
};
Prime.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=116%3A25&t=ri42uDzp7Wjgw7vi-4',
  },
};

export const White = Template.bind({});
White.args = {
  link: '/',
  width: 97,
  height: 40,
  children: 'Sign In',
  backgroundColor: 'var(--white)',
  color: 'var(--purple-900)',
  transition: true,
};
White.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=133%3A294&t=ri42uDzp7Wjgw7vi-4',
  },
};
