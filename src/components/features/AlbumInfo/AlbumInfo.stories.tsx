import type { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  mockSearchResult_default,
  mockSearchResult_ellipsis,
} from '@/utils/mocks/mockInfo';
import AlbumInfo from './AlbumInfo';
import { ProcessedResult } from '@/types/data';

export default {
  title: 'common/components/AlbumInfo',
  component: AlbumInfo,
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
        url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=181%3A1255&t=DF3NPpvyvYNI6KSE-4',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=181%3A875&t=DF3NPpvyvYNI6KSE-4',
      },
    ],
  },
} as ComponentMeta<typeof AlbumInfo>;

const Template: ComponentStory<typeof AlbumInfo> = (args) => (
  <AlbumInfo {...args} />
);

export const AllDefault = Template.bind({});
AllDefault.args = {
  page: 'all',
  view: 'block',
  searchResult: mockSearchResult_default as ProcessedResult,
};

export const AllEllpsis = Template.bind({});
AllEllpsis.args = {
  page: 'all',
  view: 'block',
  searchResult: mockSearchResult_ellipsis as ProcessedResult,
};

export const CollectionDefault = Template.bind({});
CollectionDefault.args = {
  page: 'collection',
  view: 'block',
  searchResult: mockSearchResult_default as ProcessedResult,
};

export const CollectionEllpsis = Template.bind({});
CollectionEllpsis.args = {
  page: 'collection',
  view: 'block',
  searchResult: mockSearchResult_ellipsis as ProcessedResult,
};
