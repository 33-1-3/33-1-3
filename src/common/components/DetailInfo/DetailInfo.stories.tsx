import type { ComponentMeta, ComponentStory } from '@storybook/react';
import DetailInfo from './DetailInfo';

export default {
  title: 'common/components/DetailInfo',
  component: DetailInfo,
  args: {
    isValid: true,
  },
  parameters: {
    design: {
      url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=377%3A2244&t=ri42uDzp7Wjgw7vi-4',
    },
  },
} as ComponentMeta<typeof DetailInfo>;

const mockTrackList = [
  { position: 'A1', title: '나의 옛날 이야기', duration: '3:33' },
  { position: 'A2', title: '꽃', duration: '2:59' },
  { position: 'A3', title: '삐에로는 우릴 보고 웃지', duration: '3:53' },
  { position: 'A4', title: '사랑이 지나가면', duration: '4:00' },
  { position: 'B1', title: '너의 의미', duration: '3:15' },
  { position: 'B2', title: '여름밤의 꿈', duration: '3:56' },
  { position: 'B3', title: '꿍따리 샤바라', duration: '3:48' },
  { position: 'B4', title: '어허야 둥기둥기', duration: '2:34' },
];

const Template: ComponentStory<typeof DetailInfo> = (args) => (
  <DetailInfo {...args} />
);

export const Released = Template.bind({});
Released.args = {
  infoName: 'Year',
  infoContent: '2014',
};

export const Genre = Template.bind({});
Genre.args = {
  infoName: 'Genre',
  infoContent: ['Pop', 'Folk, World, & Country'],
};

export const Style = Template.bind({});
Style.args = {
  infoName: 'Style',
  infoContent: ['Folk', 'Ballad', 'K-pop'],
};

export const Country = Template.bind({});
Country.args = {
  infoName: 'Country',
  infoContent: 'South Korea',
};

export const Label = Template.bind({});
Label.args = {
  infoName: 'Label',
  infoContent: ['Loen Entertainment'],
};

export const Tracklist = Template.bind({});
Tracklist.args = {
  infoName: 'Tracklist',
  infoContent: mockTrackList,
};
