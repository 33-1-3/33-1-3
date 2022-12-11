import { ComponentStory, ComponentMeta } from '@storybook/react';

import Bookshelf from './Bookshelf';

export default {
  title: 'pages/MyCollections/Bookshelf',
  component: Bookshelf,
  argTypes: {
    count: { control: { type: 'number', min: 0, step: 1 } },
    step: { control: { type: 'range', min: 1, max: 10, step: 1 } },
  },
  parameters: {
    design: {
      url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=181%3A2454&t=ri42uDzp7Wjgw7vi-4',
    },
  },
} as ComponentMeta<typeof Bookshelf>;

const Template: ComponentStory<typeof Bookshelf> = (args) => (
  <Bookshelf {...args} />
);

export const Empty = Template.bind({});
Empty.args = {
  userId: 1,
  collectionId: 1,
  title: 'My Vinyls',
  count: 0,
  step: 10,
};

export const BelowTen = Template.bind({});
BelowTen.args = {
  userId: 1,
  collectionId: 1,
  title: 'My Vinyls',
  count: 10,
  step: 10,
};

export const BelowTwenty = Template.bind({});
BelowTwenty.args = {
  userId: 1,
  collectionId: 1,
  title: 'My Vinyls',
  count: 20,
  step: 10,
};

export const BelowThirty = Template.bind({});
BelowThirty.args = {
  userId: 1,
  collectionId: 1,
  title: 'My Vinyls',
  count: 30,
};

export const BelowForty = Template.bind({});
BelowForty.args = {
  userId: 1,
  collectionId: 1,
  title: 'My Vinyls',
  count: 40,
};

export const AboveForty = Template.bind({});
AboveForty.args = {
  userId: 1,
  collectionId: 1,
  title: 'My Vinyls',
  count: 50,
};
