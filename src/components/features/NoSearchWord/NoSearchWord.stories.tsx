import type { ComponentMeta, ComponentStory } from '@storybook/react';
import NoSearchWord from './NoSearchWord';

export default {
  title: 'features/NoSearchWord',
  component: NoSearchWord,
  parameters: {
    docs: {
      description: {
        component:
          '사용자가 검색어를 입력하지 않은 경우 렌더링할 컴포넌트입니다.',
      },
    },
    design: {
      url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=2149-1373&t=JXB0sRNf3ItkpRo1-4',
    },
  },
} as ComponentMeta<typeof NoSearchWord>;

const Template: ComponentStory<typeof NoSearchWord> = () => <NoSearchWord />;

export const Example = Template.bind({});
