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
  width: 120,
  height: 36,
  dropKind: 'sort',
  content: [
    { key: 'default', value: '정렬방식' },
    { key: 'name', value: '이름순' },
    { key: 'date', value: '년도순' },
    { key: 'price', value: '가격순' },
  ],
};

export const Show = Template.bind({});
Show.args = {
  width: 105,
  height: 36,
  dropKind: 'view',
  content: [
    { key: 'dafult', value: '보기방식' },
    { key: 'block', value: '블록' },
    { key: 'list', value: '리스트' },
  ],
};
