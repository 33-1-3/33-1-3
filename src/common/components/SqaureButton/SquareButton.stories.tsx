import { GlobalStyle } from '../../styles/globalStyle';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import SquareButton from './SqaureButton';

export default {
  title: 'Components/Common/SqaureButton',
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

export const MyCollections = Template.bind({});

MyCollections.args = {
  children: 'My Collections',
};

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
  children: '확인',
};

export const Cancel = Template.bind({});

Cancel.args = {
  children: '취소',
};

export const Edit = Template.bind({});

Edit.args = {
  children: '편집하기',
};
