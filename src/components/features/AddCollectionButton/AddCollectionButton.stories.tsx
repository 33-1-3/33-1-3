import type { ComponentMeta, ComponentStory } from '@storybook/react';
import AddCollectionButton from './AddCollectionButton';

export default {
  title: 'common/components/AddCollectionButton',
  component: AddCollectionButton,
} as ComponentMeta<typeof AddCollectionButton>;

const Template: ComponentStory<typeof AddCollectionButton> = (args) => (
  <AddCollectionButton {...args} />
);

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  onClick() {
    console.log('add a collection!');
  },
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  onClick() {
    console.log('add a collection!');
  },
};
