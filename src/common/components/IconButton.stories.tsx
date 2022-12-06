import { ComponentStory, ComponentMeta } from '@storybook/react';

import IconButton from './IconButton';

export default {
  title: 'common/components/IconButton',
  component: IconButton,
  argTypes: {},
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Small = Template.bind({});
Small.args = {
  width: 16,
  height: 16,
  iconType: 'plus',
};

export const Regular = Template.bind({});
Regular.args = {
  width: 28,
  height: 28,
  iconType: 'plus',
};

export const Large = Template.bind({});
Large.args = {
  width: 32,
  height: 32,
  iconType: 'plus',
};
