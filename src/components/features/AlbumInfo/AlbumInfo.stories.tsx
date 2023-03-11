import type { ComponentMeta, ComponentStory } from '@storybook/react';
import AlbumInfo from './AlbumInfo';
import {
  mockSearchResult_default,
  mockSearchResult_ellipsis,
  mockTrackList,
} from '@/utils/mocks/mockInfo';
import { ProcessedResult, ProcessedTracklist } from '@/types/data';

export default {
  title: 'features/AlbumInfo',
  component: AlbumInfo,
  parameters: {
    docs: {
      description: {
        component:
          '콜렉션 추가 및 삭제 버튼과 함께 LP 상세 정보를 나타내는 컴포넌트입니다.',
      },
    },
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
  argTypes: {
    page: {
      description: '렌더링되는 페이지 지정',
      table: {
        type: {
          summary: `'all' | 'collection'`,
        },
      },
      options: ['all', 'collection'],
      control: { type: 'radio' },
    },
    view: {
      description:
        '사용자의 dropdown 선택에 따라 어떤 크기와 모양으로 보여질지 지정',
      table: {
        type: {
          summary: `'block' | 'list' | 'detail'`,
        },
      },
      options: ['block', 'list', 'detail'],
      control: { type: 'radio' },
    },
    searchResult: {
      description: 'API에서 응답 받은 raw 데이터를 가공한 데이터',
    },
    tracklist: {
      description:
        'Tracklist 정보가 필요한 경우 레이아웃에 맞게 따로 가공한 데이터',
    },
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
  tracklist: mockTrackList as ProcessedTracklist,
};

export const AllEllpsis = Template.bind({});
AllEllpsis.args = {
  page: 'all',
  view: 'block',
  searchResult: mockSearchResult_ellipsis as ProcessedResult,
  tracklist: mockTrackList as ProcessedTracklist,
};

export const CollectionDefault = Template.bind({});
CollectionDefault.args = {
  page: 'collection',
  view: 'block',
  searchResult: mockSearchResult_default as ProcessedResult,
  tracklist: mockTrackList as ProcessedTracklist,
};

export const CollectionEllpsis = Template.bind({});
CollectionEllpsis.args = {
  page: 'collection',
  view: 'block',
  searchResult: mockSearchResult_ellipsis as ProcessedResult,
  tracklist: mockTrackList as ProcessedTracklist,
};
