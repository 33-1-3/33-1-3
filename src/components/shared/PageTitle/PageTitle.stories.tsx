import { ComponentStory, ComponentMeta } from '@storybook/react';

import PageTitle from './PageTitle';

export default {
  PageTitle: 'common/components/PageTitle',
  component: PageTitle,
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args) => (
  <PageTitle {...args} />
);

export const MyCollectionsPageTitle = Template.bind({});
MyCollectionsPageTitle.args = {
  children: 'My Collections',
};

export const MyCollectionPageTitle = Template.bind({});
MyCollectionPageTitle.args = {
  children: '소장 중 💼',
};
