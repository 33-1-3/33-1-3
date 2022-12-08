import { ComponentStory, ComponentMeta } from '@storybook/react';
import Link from './Link';

export default {
  title: 'common/components/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Prime = Template.bind({});
Prime.args = {
  link: '/',
  width: '11.125rem',
  height: '2.5rem',
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
  width: '6.0625rem',
  height: '2.5rem',
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
