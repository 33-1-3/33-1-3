import { ComponentStory, ComponentMeta } from '@storybook/react';
import LogoLink from './LogoLink';

export default {
  title: 'common/components/LogoLink',
  component: LogoLink,
} as ComponentMeta<typeof LogoLink>;

const Template: ComponentStory<typeof LogoLink> = (args) => (
  <LogoLink {...args} />
);

export const Large = Template.bind({});
Large.args = {
  width: '132px',
  height: '72px',
};

export const Small = Template.bind({});
Small.args = {
  width: '74px',
  height: '40px',
};
