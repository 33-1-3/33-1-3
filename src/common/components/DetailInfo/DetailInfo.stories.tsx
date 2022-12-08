import type { ComponentMeta, ComponentStory } from '@storybook/react';
import DetailInfo from './DetailInfo';

export default {
  title: 'common/components/DetailInfo',
  component: DetailInfo,
  parameters: {
    design: {
      url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=377%3A2244&t=ri42uDzp7Wjgw7vi-4',
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
};
