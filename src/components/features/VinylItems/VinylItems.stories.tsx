import type { ComponentMeta, ComponentStory } from '@storybook/react';
import VinylItems from './VinylItems';
import { mockSearchResults } from '@/utils/mocks/mockInfo';

// TODO: 스토리북 새로고침 해야만 보이는 에러 해결(Album Info 컴포넌트 확인 필요)
export default {
  title: 'features/VinylItems',
  component: VinylItems,
  args: {
    searchResults: mockSearchResults,
  },
} as ComponentMeta<typeof VinylItems>;

const Template: ComponentStory<typeof VinylItems> = (args) => (
  <VinylItems {...args} />
);

export const AllBlock = Template.bind({});
AllBlock.args = {
  page: 'all',
  view: 'block',
};
AllBlock.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=133%3A344&t=klXldng2oaYkGL1Z-4',
  },
};

export const AllList = Template.bind({});
AllList.args = {
  page: 'all',
  view: 'list',
};
AllList.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=181%3A622&t=WViOsk1J5WsWdz9q-4',
  },
};

export const CollectionBlock = Template.bind({});
CollectionBlock.args = {
  page: 'collection',
  view: 'block',
};
CollectionBlock.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=181%3A3054&t=WViOsk1J5WsWdz9q-4',
  },
};

export const CollectionList = Template.bind({});
CollectionList.args = {
  page: 'collection',
  view: 'list',
};
CollectionList.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=181%3A4470&t=WViOsk1J5WsWdz9q-4',
  },
};
