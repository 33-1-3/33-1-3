import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SquareButton from './SquareButton';

export default {
  title: 'components/shared/SqaureButton',
  parameters: {
    docs: {
      description: {
        component: '서비스 내에서 주로 사용되는 사각형 버튼 컴포넌트입니다.',
      },
    },
  },
  args: {
    fontSize: 20,
    size: 'small',
    isFilled: true,
  },
  argTypes: {
    fontSize: {
      description: '내부 텍스트 크기 지정',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: '20',
        },
      },
    },
    size: {
      description: '컴포넌트 자체의 크기 지정',
      table: {
        type: {
          summary: `'small' | 'large'`,
        },
        defaultValue: {
          summary: `'small'`,
        },
      },
      options: ['small', 'large'],
      control: { type: 'radio' },
    },
    isFilled: {
      description: '배경 색 여부 지정',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true',
        },
      },
    },
    children: {
      description: '내부 텍스트 내용 지정',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: `'버튼'`,
        },
      },
    },
  },
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

export const Disabled = Template.bind({});
Disabled.args = {
  isFilled: false,
  disabled: true,
  children: '비활성화',
};
Disabled.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=108%3A57&t=ri42uDzp7Wjgw7vi-4',
  },
};
