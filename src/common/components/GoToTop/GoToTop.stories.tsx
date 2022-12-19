import { ComponentStory, ComponentMeta } from '@storybook/react';
import GoToTop from './GoToTop';

export default {
  title: 'common/components/GoToTop',
  component: GoToTop,
} as ComponentMeta<typeof GoToTop>;

const Template: ComponentStory<typeof GoToTop> = (args) => (
  <GoToTop {...args} />
);

export const Prime = Template.bind({});
Prime.args = {};
Prime.parameters = {
  design: {
    url: '',
  },
};
