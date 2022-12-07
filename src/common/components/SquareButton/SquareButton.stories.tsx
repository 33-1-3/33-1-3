import { GlobalStyle } from '../../styles/globalStyle';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import SquareButton from './SquareButton';

export default {
  title: 'common/components/SqaureButton',
  args: {
    fontSize: '20px',
    isBig: false,
    isFilled: true,
  },
  component: SquareButton,
  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        <Story />
      </>
    ),
  ],
} as ComponentMeta<typeof SquareButton>;

const Template: ComponentStory<typeof SquareButton> = (args) => (
  <SquareButton {...args} />
);

export const SignIn = Template.bind({});

SignIn.args = {
  children: 'Sign In',
};

export const SignUp = Template.bind({});

SignUp.args = {
  children: 'Sign Up',
};

export const Approve = Template.bind({});

Approve.args = {
  fontSize: '18px',
  isBig: true,
  children: '확인',
};

export const Cancel = Template.bind({});

Cancel.args = {
  fontSize: '18px',
  isBig: true,
  isFilled: false,
  children: '취소',
};

export const Edit = Template.bind({});

Edit.args = {
  children: '편집하기',
};
