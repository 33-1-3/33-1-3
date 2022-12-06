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

export const White = Template.bind({});
White.args = {
  link: '/',
  width: '6.0625rem',
  height: '2.5rem',
  children: 'Sign In',
  backgroundColor: 'var(--white)',
  color: 'var(--purple-900)',
};
