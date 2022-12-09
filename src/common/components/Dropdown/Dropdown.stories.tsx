import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from './Dropdown';

export default {
  title: 'common/components/Dropdown',
  conponent: Dropdown,
  parameters: {
    reactRouter: {
      routePath: '/searchresults',
    },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Sort = Template.bind({});
Sort.args = {
  label: '정렬방식 선택',
  dropKind: 'sort',
  content: [
    { key: 'default', value: '정렬방식' },
    { key: 'title', value: '앨범 제목' },
    { key: 'name', value: '가수 이름' },
    { key: 'date', value: '발매일' },
    { key: 'update', value: '업데이트' },
    { key: 'price', value: '가격' },
  ],
};

export const Show = Template.bind({});
Show.args = {
  label: '보기방식 선택',
  dropKind: 'view',
  content: [
    { key: 'default', value: '보기방식' },
    { key: 'block', value: '블록' },
    { key: 'list', value: '리스트' },
  ],
};
