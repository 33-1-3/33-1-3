import type { ComponentMeta, ComponentStory } from '@storybook/react';
import VinylItem from './VinylItem';
import { mockSearchResult_default } from '@/utils/mocks/mockInfo';

// TODO: 스토리북 새로고침 해야만 보이는 에러 해결(Album Info 컴포넌트 확인 필요)
export default {
  title: 'features/VinylItem',
  component: VinylItem,
  args: {
    searchResult: mockSearchResult_default,
  },
  argTypes: {
    page: {
      options: ['all', 'collection'],
      control: { type: 'radio' },
    },
    view: {
      options: ['block', 'list', 'detail'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=181%3A875&t=DF3NPpvyvYNI6KSE-4',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=181%3A1029&t=DF3NPpvyvYNI6KSE-4',
      },
    ],
  },
} as ComponentMeta<typeof VinylItem>;

const Template: ComponentStory<typeof VinylItem> = (args) => (
  <VinylItem {...args} />
);

export const AllBlock = Template.bind({});
AllBlock.args = {
  page: 'all',
  view: 'block',
};

export const AllList = Template.bind({});
AllList.args = {
  page: 'all',
  view: 'list',
};

export const AllDetail = Template.bind({});
AllDetail.args = {
  page: 'all',
  view: 'detail',
};

export const CollectionBlock = Template.bind({});
CollectionBlock.args = {
  page: 'collection',
  view: 'block',
};

export const CollectionList = Template.bind({});
CollectionList.args = {
  page: 'collection',
  view: 'list',
};
