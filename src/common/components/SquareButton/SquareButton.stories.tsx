import type { ComponentMeta, ComponentStory } from '@storybook/react';
import SquareButton from './SquareButton';

export default {
  title: 'common/components/SqaureButton',
  args: {
    fontSize: 20,
    size: 'small',
    isFilled: true,
  },
  argTypes: {
    size: {
      options: ['small', 'large'],
      control: { type: 'radio' },
    },
  },
  component: SquareButton,
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
  fontSize: 18,
  size: 'large',
  children: '확인',
};

export const Cancel = Template.bind({});

Cancel.args = {
  fontSize: 18,
  size: 'large',
  isFilled: false,
  children: '취소',
};

export const Edit = Template.bind({});

Edit.args = {
  children: '편집하기',
};
