import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { DetailInfoProps } from '@/common/components/DetailInfo/DetailInfo';
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

const mockTrackList = [
  {
    position: 'A1',
    title: '가나다라마바사아자차카타파하ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    duration: '3:33',
  },
  { position: 'A2', title: '꽃', duration: '2:59' },
  { position: 'A3', title: '삐에로는 우릴 보고 웃지', duration: '3:53' },
  { position: 'A4', title: '사랑이 지나가면', duration: '4:00' },
  { position: 'B1', title: '너의 의미', duration: '3:15' },
  { position: 'B2', title: '여름밤의 꿈', duration: '3:56' },
  { position: 'B3', title: '꿍따리 샤바라', duration: '3:48' },
  { position: 'B4', title: '어허야 둥기둥기', duration: '2:34' },
];

const mockTitleInfo_default = { title: '꽃갈피', artist: 'IU' };

const mockTitleInfo_ellipsis = {
  title: '가나다라마바사아자차카타파하ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  artist: '가나다라마바사아자차카타파하ABCDEFGHIJKLMNOPQRSTUVWXYZ',
};

const mockDetailInfo_default: DetailInfoProps[] = [
  { infoName: 'Released', infoContent: '2014', isValid: true },
  {
    infoName: 'Genre',
    infoContent: ['Pop', 'Folk, World, & Country'],
    isValid: true,
  },
  {
    infoName: 'Style',
    infoContent: ['Folk', 'Ballad', 'K-pop'],
    isValid: true,
  },
  { infoName: 'Country', infoContent: 'South Korea', isValid: true },
  { infoName: 'Label', infoContent: ['Loen Entertainment'], isValid: true },
  { infoName: 'Tracklist', infoContent: mockTrackList, isValid: true },
];

const mockDetailInfo_ellipsis: DetailInfoProps[] = [
  { infoName: 'Released', infoContent: '2014', isValid: true },
  {
    infoName: 'Genre',
    infoContent: [
      '가나다라마바사아자차카타파하ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      'Folk, World, & Country',
    ],
    isValid: true,
  },
  {
    infoName: 'Style',
    infoContent: [
      '가나다라마바사아자차카타파하ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      'Ballad',
      'K-pop',
    ],
    isValid: true,
  },
  {
    infoName: 'Country',
    infoContent: '가나다라마바사아자차카타파하ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    isValid: true,
  },
  {
    infoName: 'Label',
    infoContent: ['가나다라마바사아자차카타파하ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
    isValid: true,
  },
  { infoName: 'Tracklist', infoContent: mockTrackList, isValid: true },
];

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
