import { ComponentStory, ComponentMeta } from '@storybook/react';
import Alert from './Alert';

export default {
  title: 'shared/Alert',
  conponent: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const TopAlert = Template.bind({});
TopAlert.args = {
  $type: 'top',
  children: 'TopAlert',
};

export const LongTopAlert = Template.bind({});
LongTopAlert.args = {
  $type: 'top',
  children:
    'LongTopAlertLongTopAlertLongTopAlertLongTopAlertLongTopAlertLongTopAlertLongTopAlertLongTopAlertLongTopAlertLongTopAlertLongTopAlertLongTopAlertLongTopAlertLongTopAlertLongTopAlertLongTopAlertLongTopAlertLongTopAlertLongTopAlertLongTopAlertLongTopAlertLongTopAlertLongTopAlertLongTopAlertLongTopAlertLongTopAlertLongTopAlertLongTopAlert',
};

export const TopAlertWithFixedWidth = Template.bind({});
TopAlertWithFixedWidth.args = {
  $type: 'top',
  $width: '300px',
  children: 'TopAlertWithFixedWidth',
};

export const BottomRightAlert = Template.bind({});
BottomRightAlert.args = {
  $type: 'bottomRight',
  $width: '300px',
  children: 'BottomRightAlert',
};

export const LongBottomRightAlert = Template.bind({});
LongBottomRightAlert.args = {
  $type: 'bottomRight',
  $width: '300px',
  children:
    'LongBottomRightAlertLongBottomRightAlertLongBottomRightAlertLongBottomRightAlertLongBottomRightAlertLongBottomRightAlertLongBottomRightAlert',
};
