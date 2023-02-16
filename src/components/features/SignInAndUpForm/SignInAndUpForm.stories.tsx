import { ComponentStory, ComponentMeta } from '@storybook/react';
import SignInAndUpForm from './SignInAndUpForm';

export default {
  title: 'features/SignInAndUpForm',
  component: SignInAndUpForm,
} as ComponentMeta<typeof SignInAndUpForm>;

const Template: ComponentStory<typeof SignInAndUpForm> = (args) => (
  <SignInAndUpForm {...args} />
);

export const SigninForm = Template.bind({});
SigninForm.args = { option: 'signin' };

export const SignupForm = Template.bind({});
SignupForm.args = { option: 'signup' };
