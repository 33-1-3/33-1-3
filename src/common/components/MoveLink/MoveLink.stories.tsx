import type { ComponentMeta, ComponentStory } from '@storybook/react';
import MoveFormLink from './MoveFormLink';

export default {
  title: 'common/components/MoveFormLink',
  component: MoveFormLink,
  argTypes: {
    moveTarget: {
      options: ['signin', 'signup'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof MoveFormLink>;

const Template: ComponentStory<typeof MoveFormLink> = (args) => (
  <MoveFormLink {...args} />
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
