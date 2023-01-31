import { ComponentStory, ComponentMeta } from '@storybook/react';
import PageTitle from './PageTitle';

export default {
  title: 'shared/PageTitle',
  component: PageTitle,
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args) => (
  <PageTitle {...args} />
);

export const MyCollectionsTitle = Template.bind({});
MyCollectionsTitle.args = {
  marginTop: '64px',
  marginBottom: '48px',
  children: "USER's Collections",
};

export const MyCollectionTitle = Template.bind({});
MyCollectionTitle.args = {
  marginTop: '64px',
  marginBottom: '32px',
  children: '소장 중 💼',
};

export const LongTitle = Template.bind({});
LongTitle.args = {
  children: 'Long Title Long Title Long Title Long Title Long Title',
};
