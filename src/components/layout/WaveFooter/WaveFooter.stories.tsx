import type { ComponentMeta, ComponentStory } from '@storybook/react';
import WaveFooter from './WaveFooter';

export default {
  title: 'common/components/WaveFooter',
  component: WaveFooter,
} as ComponentMeta<typeof WaveFooter>;

const Template: ComponentStory<typeof WaveFooter> = (args) => (
  <WaveFooter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  height: 'auto',
};
Default.parameters = {
  design: {
    url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=177%3A468&t=oC3ONc8Qn4zRI76M-4',
  },
};
