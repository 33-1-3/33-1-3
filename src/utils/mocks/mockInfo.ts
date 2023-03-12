import { DetailInfoProps } from '@/types/render';

const ellipsisString = '가나다라마바사아자차카타파하ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const mockTrackList = {
  infoName: 'Tracklist',
  infoContent: [
    {
      position: 'A1',
      title: ellipsisString,
      duration: '3:33',
    },
    { position: 'A2', title: '꽃', duration: '2:59' },
    { position: 'A3', title: '삐에로는 우릴 보고 웃지', duration: '3:53' },
    { position: 'A4', title: '사랑이 지나가면', duration: '4:00' },
    { position: 'B1', title: '너의 의미', duration: '3:15' },
    { position: 'B2', title: '여름밤의 꿈', duration: '3:56' },
    { position: 'B3', title: '꿍따리 샤바라', duration: '3:48' },
    { position: 'B4', title: '어허야 둥기둥기', duration: '2:34' },
  ],
  isValid: true,
};

const mockTitleInfo_default = { title: '꽃갈피', artist: 'IU' };

const mockTitleInfo_ellipsis = {
  title: ellipsisString,
  artist: ellipsisString,
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
];

const mockDetailInfo_ellipsis: DetailInfoProps[] = [
  { infoName: 'Released', infoContent: '2014', isValid: true },
  {
    infoName: 'Genre',
    infoContent: [ellipsisString, 'Folk, World, & Country'],
    isValid: true,
  },
  {
    infoName: 'Style',
    infoContent: [ellipsisString, 'Ballad', 'K-pop'],
    isValid: true,
  },
  {
    infoName: 'Country',
    infoContent: ellipsisString,
    isValid: true,
  },
  {
    infoName: 'Label',
    infoContent: [ellipsisString],
    isValid: true,
  },
];

const mockId = 112313213;

const mockImgUrl =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/220px-Cat03.jpg';

const mockResourceUrl = 'https://www.naver.com';

const mockSearchResult_default = {
  id: mockId,
  titleInfo: mockTitleInfo_default,
  detailInfo: mockDetailInfo_default,
  imgUrl: mockImgUrl,
  resourceUrl: mockResourceUrl,
};

const mockSearchResult_ellipsis = {
  id: mockId,
  titleInfo: mockTitleInfo_ellipsis,
  detailInfo: mockDetailInfo_ellipsis,
  imgUrl: mockImgUrl,
  resourceUrl: mockResourceUrl,
};

const mockSearchResults = Array.from({ length: 10 }).fill(
  mockSearchResult_default
);

const mockUsersData = [
  {
    id: 1,
    email: 'alice@gmail.com',
    name: 'Alice',
    password: 'alice12345',
    collections: [
      { id: 1, title: 'Harry Potter', albums: [11268237, 15860024, 21021292] },
      {
        id: 2,
        title: 'Beatles',
        albums: [46402, 45729, 45799, 45760, 67473, 46382],
      },
    ],
  },
  {
    id: 2,
    email: 'bob@gmail.com',
    name: 'Bob',
    password: 'bob12345',
    collections: [
      { id: 1, title: 'My Vinyls', albums: [21303211, 11255518] },
      { id: 2, title: 'Wish Lists', albums: [6008401] },
    ],
  },
];

const mockPurchaseInfoContent = [
  { date: '2020.10.12', price: '28,000원', state: 'NM' },
  { date: '2022.12.04', price: '20,000원', state: 'Very Good' },
];
const mockMemo =
  '- 내가 제일 좋아하는 LP 😊<br/> - 12월에 당근마켓에서 싸게 구입<br/> - 12월에 당근마켓에서 싸게 구입';

export {
  mockTrackList,
  mockSearchResult_default,
  mockSearchResult_ellipsis,
  mockImgUrl,
  mockSearchResults,
  mockUsersData,
  mockPurchaseInfoContent,
  mockMemo,
};
