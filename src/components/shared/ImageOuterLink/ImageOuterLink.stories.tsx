import { ComponentStory, ComponentMeta } from '@storybook/react';
import ImageOuterLink from './ImageOuterLink';

export default {
  title: 'common/components/ImageOuterLink',
  component: ImageOuterLink,
} as ComponentMeta<typeof ImageOuterLink>;

const Template: ComponentStory<typeof ImageOuterLink> = (args) => (
  <ImageOuterLink {...args} />
);

export const Github = Template.bind({});
Github.args = {
  width: 40,
  height: 40,
  moveToLink: {
    site: 'github',
    pathname: 'https://github.com/33-1-3/33-1-3/issues',
  },
};

export const Discogs = Template.bind({});
Discogs.args = {
  width: 108,
  height: 40,
  moveToLink: {
    site: 'discogs',
    pathname: 'https://www.discogs.com/ko/',
  },
};
