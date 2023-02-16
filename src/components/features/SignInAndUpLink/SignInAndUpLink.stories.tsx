import type { ComponentMeta, ComponentStory } from '@storybook/react';
import SignInAndUpLink from './SignInAndUpLink';

export default {
  title: 'features/SignInAndUpLink',
  component: SignInAndUpLink,
  argTypes: {
    moveTarget: {
      options: ['signin', 'signup'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof SignInAndUpLink>;

const Template: ComponentStory<typeof SignInAndUpLink> = (args) => (
  <SignInAndUpLink {...args} />
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
