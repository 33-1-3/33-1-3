import type { ComponentMeta, ComponentStory } from '@storybook/react';
import MoveLink from './MoveLink';

export default {
  title: 'common/components/MoveLink',
  component: MoveLink,
  argTypes: {
    moveTarget: {
      options: ['signin', 'signup', 'github'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof MoveLink>;

const Template: ComponentStory<typeof MoveLink> = (args) => (
  <MoveLink {...args} />
);

export const MoveSignIn = Template.bind({});
MoveSignIn.args = {
  moveTarget: 'signin',
};
MoveSignIn.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=133%3A194&t=JiHlUULV7Tp6Y1lx-4',
  },
};

export const MoveSignUp = Template.bind({});
MoveSignUp.args = {
  moveTarget: 'signup',
};
MoveSignUp.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=133%3A192&t=JiHlUULV7Tp6Y1lx-4',
  },
};
