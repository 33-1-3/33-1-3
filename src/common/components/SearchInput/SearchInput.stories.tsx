import { GlobalStyle } from '../../styles/globalStyle';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchInput from './SearchInput';

export default {
  title: 'common/components/SearchInput',
  component: SearchInput,
  args: {
    placeholder: '검색어를 입력하세요.',
    page: '전체',
    width: 516,
  },
  argTypes: {
    page: {
      options: ['전체', '리스트'],
      control: { type: 'radio' },
    },
    width: {
      control: { type: 'range', min: 200, max: 1000, step: 1 },
    },
  },
  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        <Story />
      </>
    ),
  ],
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => (
  <SearchInput {...args} />
);

export const Header = Template.bind({});
Header.args = {
  width: 240,
};

export const Main = Template.bind({});

export const Collection = Template.bind({});
Collection.args = {
  page: '리스트',
};

export const Custom = Template.bind({});
Custom.args = {
  placeholder: '찾으시는 LP가 있나요?',
  width: 360,
};
