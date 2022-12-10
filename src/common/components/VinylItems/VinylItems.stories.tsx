import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockSearchResult } from '@/utils/mockInfo';
import VinylItems from './VinylItems';

export default {
  title: 'common/components/VinylItems',
  component: VinylItems,
  args: {
    searchResult: mockSearchResult,
  },
} as ComponentMeta<typeof VinylItems>;

const Template: ComponentStory<typeof VinylItems> = (args) => (
  <VinylItems {...args}></VinylItems>
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
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=133%3A344&t=klXldng2oaYkGL1Z-4',
  },
};

export const CollectionBlock = Template.bind({});
CollectionBlock.args = {
  page: 'collection',
  view: 'block',
};
CollectionBlock.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=133%3A344&t=klXldng2oaYkGL1Z-4',
  },
};

export const CollectionList = Template.bind({});
CollectionList.args = {
  page: 'collection',
  view: 'list',
};
CollectionList.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=133%3A344&t=klXldng2oaYkGL1Z-4',
  },
};
