import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from './Dropdown';
import {
  SORT_CONTENT,
  COLLECTION_SORT_CONTENT,
  SORT_LABEL,
  VIEW_CONTENT,
  VIEW_LABEL,
} from '@/utils/constants/dropdown';

export default {
  title: 'components/shared/Dropdown',
  conponent: Dropdown,
  parameters: {
    reactRouter: {
      routePath: '/searchresults',
    },
  },
  args: {
    width: 120,
    height: 36,
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const SearchResultSort = Template.bind({});
SearchResultSort.args = {
  label: SORT_LABEL,
  dropKind: 'sort',
  content: SORT_CONTENT,
};

export const MyCollectionSort = Template.bind({});
MyCollectionSort.args = {
  label: SORT_LABEL,
  dropKind: 'sort',
  content: COLLECTION_SORT_CONTENT,
};

export const View = Template.bind({});
View.args = {
  label: VIEW_LABEL,
  dropKind: 'view',
  content: VIEW_CONTENT,
};
