import { DetailInfoProps } from '@/common/components/DetailInfo/DetailInfo';

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

const mockImgURL =
  'https://i.discogs.com/jgaM3Iwz2t05Whh7VHfdtqYtIseHo3mRqk1PQNIUsF0/rs:fit/g:sm/q:90/h:398/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYwMDg0/MDEtMTQwODY5NzMw/MS0zMzE2LmpwZWc.jpeg';

export {
  mockTitleInfo_default,
  mockTitleInfo_ellipsis,
  mockDetailInfo_default,
  mockDetailInfo_ellipsis,
  mockImgURL,
};
