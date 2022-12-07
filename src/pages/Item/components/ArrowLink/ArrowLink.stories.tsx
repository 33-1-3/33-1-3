import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArrowLink from './ArrowLink';

export default {
  title: 'pages/Item/ArrowLink',
  component: ArrowLink,
} as ComponentMeta<typeof ArrowLink>;

const Template: ComponentStory<typeof ArrowLink> = (args) => (
  <ArrowLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  width: '60px',
  height: '60px',
  color: 'var(--white)',
  backgroundcolor: 'var(--purple-900)',
};
