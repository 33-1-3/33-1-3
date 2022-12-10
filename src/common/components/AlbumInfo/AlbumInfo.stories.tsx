import type { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  mockTitleInfo_default,
  mockTitleInfo_ellipsis,
  mockDetailInfo_default,
  mockDetailInfo_ellipsis,
} from '@/utils/mockInfo';
import AlbumInfo from './AlbumInfo';

export default {
  title: 'common/components/AlbumInfo',
  component: AlbumInfo,
  argTypes: {
    page: {
      options: ['all', 'collection'],
      control: { type: 'radio' },
    },
    view: {
      options: ['cover', 'list', 'detail'],
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
  view: 'cover',
  titleInfo: mockTitleInfo_default,
  detailInfo: mockDetailInfo_default,
};

export const AllEllpsis = Template.bind({});
AllEllpsis.args = {
  page: 'all',
  view: 'cover',
  titleInfo: mockTitleInfo_ellipsis,
  detailInfo: mockDetailInfo_ellipsis,
};

export const CollectionDefault = Template.bind({});
CollectionDefault.args = {
  page: 'collection',
  view: 'cover',
  titleInfo: mockTitleInfo_default,
  detailInfo: mockDetailInfo_default,
};

export const CollectionEllpsis = Template.bind({});
CollectionEllpsis.args = {
  page: 'collection',
  view: 'cover',
  titleInfo: mockTitleInfo_ellipsis,
  detailInfo: mockDetailInfo_ellipsis,
};
