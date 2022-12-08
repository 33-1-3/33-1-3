import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchResultText from './SearchResultText';

export default {
  title: 'common/components/SearchResultText',
  component: SearchResultText,
  args: {
    resultCount: 0,
  },
  argTypes: {
    resultCount: {
      control: { type: 'range', mix: 0, max: 100, step: 1 },
    },
  },
  parameters: {
    design: {
      url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=684%3A1153&t=IZlZBzSRbsy5uc2f-4',
    },
    reactRouter: {
      routePath: '/searchresults',
    },
  },
} as ComponentMeta<typeof SearchResultText>;

const Template: ComponentStory<typeof SearchResultText> = (args) => (
  <SearchResultText {...args} />
);

export const Example = Template.bind({});
Example.story = {
  parameters: {
    reactRouter: {
      searchParams: { query: 'IU' },
    },
  },
};
