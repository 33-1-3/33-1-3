import { ComponentStory, ComponentMeta } from '@storybook/react';

import SignInAndUpInput from './SignInAndUpInput';

export default {
  title: 'common/components/SignInAndUpInput',
  component: SignInAndUpInput,
} as ComponentMeta<typeof SignInAndUpInput>;

const Template: ComponentStory<typeof SignInAndUpInput> = (args) => (
  <SignInAndUpInput {...args} />
);

export const IdInput = Template.bind({});
IdInput.args = { option: 'id', isValid: false };

export const NicknameInput = Template.bind({});
NicknameInput.args = { option: 'nickname', isValid: false };

export const PwdInput = Template.bind({});
PwdInput.args = { option: 'pwd', isValid: false };

export const PwdCheckInput = Template.bind({});
PwdCheckInput.args = { option: 'pwdCheck', isValid: false };
