import type { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchInput from './SearchInput';

export default {
  title: 'common/components/SearchInput',
  component: SearchInput,
  args: {
    placeholder: '검색어를 입력하세요.',
    page: '전체',
    size: 'large',
  },
  argTypes: {
    page: {
      options: ['전체', '나의 콜렉션'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'large'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => (
  <SearchInput {...args} />
);

export const Header = Template.bind({});
Header.args = {
  inputSize: 'small',
};
Header.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=130%3A224&t=JiHlUULV7Tp6Y1lx-4',
  },
};

export const Main = Template.bind({});
Main.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=132%3A81&t=JiHlUULV7Tp6Y1lx-4',
  },
};

export const Collection = Template.bind({});
Collection.args = {
  page: '나의 콜렉션',
};
Collection.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=132%3A81&t=JiHlUULV7Tp6Y1lx-4',
  },
};
