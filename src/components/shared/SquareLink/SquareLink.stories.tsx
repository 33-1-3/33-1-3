import { ComponentStory, ComponentMeta } from '@storybook/react';
import SquareLink from './SquareLink';

export default {
  title: 'shared/SquareLink',
  component: SquareLink,
  parameters: {
    docs: {
      description: {
        component: 'Header에 사용되는 사각형 링크 컴포넌트입니다.',
      },
    },
  },
  args: {
    link: '/',
  },
  argTypes: {
    link: {
      description: '클릭 시 이동할 경로 지정',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: `'/'`,
        },
      },
    },
    $width: {
      description: '컴포넌트의 너비 지정',
      table: {
        type: {
          summary: `string | number`,
        },
      },
    },
    $height: {
      description: '컴포넌트의 높이 지정',
      table: {
        type: {
          summary: `string | number`,
        },
      },
    },
    $fontSize: {
      description: '내부 텍스트 크기 지정',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '20px',
        },
      },
      control: { type: 'number', min: 20, max: 60 },
    },
    $isFilled: {
      description: '배경 색 여부 지정',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true',
        },
      },
      control: { type: 'boolean' },
    },
    $isTransition: {
      description: 'hover 혹은 focus 시 트랜지션 여부 지정',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true',
        },
      },
      control: { type: 'boolean' },
    },
    children: {
      description: '내부 텍스트 내용 지정',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
} as ComponentMeta<typeof SquareLink>;

const Template: ComponentStory<typeof SquareLink> = (args) => (
  <SquareLink {...args} />
);

export const MyCollections = Template.bind({});
MyCollections.args = {
  link: '/',
  $width: 178,
  $height: 40,
  $fontSize: '20px',
  children: 'My Collections',
};
MyCollections.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=116%3A25&t=ri42uDzp7Wjgw7vi-4',
  },
};

export const SignIn = Template.bind({});
SignIn.args = {
  link: '/signin',
  $width: 100,
  $height: 40,
  $fontSize: '20px',
  children: 'Sign In',
  $isFilled: false,
  $hasTransition: true,
};
SignIn.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=133%3A294&t=ri42uDzp7Wjgw7vi-4',
  },
};
