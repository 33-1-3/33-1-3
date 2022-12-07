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
SignIn.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=133%3A294&t=JiHlUULV7Tp6Y1lx-4',
  },
};

export const SignUp = Template.bind({});
SignUp.args = {
  children: 'Sign Up',
};
SignUp.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=130%3A73&t=JiHlUULV7Tp6Y1lx-4',
  },
};

export const Approve = Template.bind({});
Approve.args = {
  fontSize: 18,
  size: 'large',
  children: '확인',
};
Approve.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=113%3A14&t=JiHlUULV7Tp6Y1lx-4',
  },
};

export const Cancel = Template.bind({});
Cancel.args = {
  fontSize: 18,
  size: 'large',
  isFilled: false,
  children: '취소',
};
Cancel.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=113%3A15&t=JiHlUULV7Tp6Y1lx-4',
  },
};

export const Edit = Template.bind({});
Edit.args = {
  children: '편집하기',
};
Edit.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=378%3A1038&t=JiHlUULV7Tp6Y1lx-4',
  },
};
