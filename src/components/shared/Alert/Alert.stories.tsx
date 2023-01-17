import { ComponentStory, ComponentMeta } from '@storybook/react';
import Alert from './Alert';

export default {
  title: 'common/components/Alert',
  conponent: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Prime = Template.bind({});
Prime.args = {};
