import { ComponentStory, ComponentMeta } from '@storybook/react';
import FloatingButton from './InquiryButton';

export default {
  title: 'common/components/FloatingButton',
  conponent: FloatingButton,
  parameters: {
    reactRouter: {
      routePath: '/searchresults',
    },
  },
} as ComponentMeta<typeof FloatingButton>;

const Template: ComponentStory<typeof FloatingButton> = () => (
  <FloatingButton />
);

export const Prime = Template.bind({});
Prime.args = {};
