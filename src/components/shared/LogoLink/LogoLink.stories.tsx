import { ComponentStory, ComponentMeta } from '@storybook/react';
import LogoLink from './LogoLink';

export default {
  title: 'components/shared/LogoLink',
  component: LogoLink,
  parameters: {
    docs: {
      description: {
        component:
          '33 1/3의 로고를 나타내며, 클릭 시 홈페이지로 이동하는 컴포넌트입니다.',
      },
    },
    design: {
      url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=129%3A28&t=ri42uDzp7Wjgw7vi-4',
    },
  },
  argTypes: {
    width: {
      description: '너비 지정',
      control: 'select',
      options: ['74px', '100px', '132px'],
    },
    height: {
      description: '높이 지정',
      control: 'select',
      options: ['40px', '54px', '72px'],
    },
  },
} as ComponentMeta<typeof LogoLink>;

const Template: ComponentStory<typeof LogoLink> = (args) => (
  <LogoLink {...args} />
);

export const Header = Template.bind({});
Header.args = {
  width: '74px',
  height: '40px',
};

export const SignInAndUp = Template.bind({});
SignInAndUp.args = {
  width: '132px',
  height: '72px',
};

export const NotFound = Template.bind({});
NotFound.args = {
  width: '100px',
  height: '54px',
};
