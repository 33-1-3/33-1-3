import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProfileLink from './ProfileLink';

export default {
  title: 'common/components/ProfileLink',
  component: ProfileLink,
} as ComponentMeta<typeof ProfileLink>;

const Template: ComponentStory<typeof ProfileLink> = (args) => (
  <ProfileLink {...args} />
);

export const User = Template.bind({});
User.args = {
  imgFileName: 'user.svg',
  userid: 'ulgoon',
  width: 40,
  height: 40,
};

export const Default = Template.bind({});
Default.args = {
  userid: 'ulgoon',
  width: 40,
  height: 40,
};
