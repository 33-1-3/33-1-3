import type { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  mockTitleInfo_default,
  mockDetailInfo_default,
  mockImgURL,
} from '@/utils/mocks/mockInfo';
import VinylItem from './VinylItem';

export default {
  title: 'common/components/VinylItem',
  component: VinylItem,
  args: {
    titleInfo: mockTitleInfo_default,
    detailInfo: mockDetailInfo_default,
    imgURL: mockImgURL,
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
