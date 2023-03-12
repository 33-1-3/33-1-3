import type { ComponentMeta, ComponentStory } from '@storybook/react';
import TitleInfo from './TitleInfo';

export default {
  title: 'features/TitleInfo',
  component: TitleInfo,
  parameters: {
    docs: {
      description: {
        component: 'LP 제목과 가수 이름을 텍스트로 나타내는 컴포넌트입니다.',
      },
    },
  },
  args: {
    title: '꽃갈피',
    artist: 'IU',
  },
  argTypes: {
    title: {
      description: 'LP 제목 텍스트 내용 지정',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    artist: {
      description: '가수 이름 텍스트 내용 지정',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    view: {
      description:
        '사용자의 dropdown 선택에 따라 어떤 크기와 모양으로 보여질지 지정',
      table: {
        type: {
          summary: `'block' | 'list' | 'detail'`,
        },
        defaultValue: {
          summary: `'block'`,
        },
      },
      options: ['block', 'list', 'detail'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof TitleInfo>;

const Template: ComponentStory<typeof TitleInfo> = (args) => (
  <TitleInfo {...args} />
);

export const Block = Template.bind({});
Block.args = {
  view: 'block',
};
Block.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=177%3A643&t=ri42uDzp7Wjgw7vi-4',
  },
};

export const List = Template.bind({});
List.args = {
  view: 'list',
};
List.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=181%3A1253&t=ri42uDzp7Wjgw7vi-4',
  },
};

export const Detail = Template.bind({});
Detail.args = {
  view: 'detail',
};
Detail.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=377%3A2339&t=ri42uDzp7Wjgw7vi-4',
  },
};
