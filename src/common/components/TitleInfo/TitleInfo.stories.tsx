import type { ComponentMeta, ComponentStory } from '@storybook/react';
import TitleInfo from './TitleInfo';

export default {
  title: 'common/components/TitleInfo',
  component: TitleInfo,
  args: {
    title: '꽃갈피',
    artist: 'IU',
  },
  argTypes: {
    view: {
      options: ['cover', 'list', 'detail'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof TitleInfo>;

const Template: ComponentStory<typeof TitleInfo> = (args) => (
  <TitleInfo {...args} />
);

export const Cover = Template.bind({});
Cover.args = {
  view: 'cover',
};
Cover.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=177%3A643&t=ri42uDzp7Wjgw7vi-4',
  },
};

export const List = Template.bind({});
List.args = {
  view: 'list',
};
List.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=181%3A1253&t=ri42uDzp7Wjgw7vi-4',
  },
};

export const Detail = Template.bind({});
Detail.args = {
  view: 'detail',
};
Detail.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=377%3A2339&t=ri42uDzp7Wjgw7vi-4',
  },
};
