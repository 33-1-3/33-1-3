import type { ComponentMeta, ComponentStory } from '@storybook/react';
import DetailInfo from './DetailInfo';

export default {
  title: 'features/DetailInfo',
  component: DetailInfo,
  parameters: {
    docs: {
      description: {
        component: 'LP의 상세 정보를 텍스트로 나타내는 컴포넌트입니다.',
      },
    },
    design: {
      url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=377%3A2244&t=ri42uDzp7Wjgw7vi-4',
    },
  },
  argTypes: {
    infoName: {
      description: 'LP 상세 정보의 제목 텍스트 지정',
      table: {
        type: {
          summary: `'Country' | 'Genre' | 'Label' | 'Style' | 'Released' | 'Tracklist'`,
        },
      },
    },
    infoContent: {
      description: 'LP 상세 정보의 내용 텍스트 입력',
      table: {
        type: {
          summary: `string | string[] | RawTracklist[]`,
        },
      },
    },
    isValid: {
      description: 'API로 전달 받은 텍스트의 유효 여부 지정',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    isMyItem: {
      description: '렌더링되는 페이지가 MyItem 페이지인지 지정',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
  },
} as ComponentMeta<typeof DetailInfo>;

const Template: ComponentStory<typeof DetailInfo> = (args) => (
  <DetailInfo {...args} />
);

export const Released = Template.bind({});
Released.args = {
  infoName: 'Released',
  infoContent: 'Aug 2014',
  isValid: true,
};

export const Genre = Template.bind({});
Genre.args = {
  infoName: 'Genre',
  infoContent: 'Pop, Folk, World, & Country',
  isValid: true,
};

export const Style = Template.bind({});
Style.args = {
  infoName: 'Style',
  infoContent: 'Folk, Ballad, K-pop',
  isValid: true,
};

export const Country = Template.bind({});
Country.args = {
  infoName: 'Country',
  infoContent: 'South Korea',
  isValid: true,
};

export const Label = Template.bind({});
Label.args = {
  infoName: 'Label',
  infoContent: 'Loen Entertainment',
  isValid: true,
};

export const Tracklist = Template.bind({});
Tracklist.args = {
  infoName: 'Tracklist',
  infoContent: [
    {
      position: 'A1',
      title: '꽃갈피',
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
