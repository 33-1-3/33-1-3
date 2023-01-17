import { ComponentStory, ComponentMeta } from '@storybook/react';

import SelectCollectionForm from './SelectCollectionForm';

export default {
  title: 'pages/Item/SelectCollectionForm',
  component: SelectCollectionForm,
  parameters: {
    design: {
      url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=181%3A2817&t=2EzCr9k6QbQSABYL-4',
    },
  },
} as ComponentMeta<typeof SelectCollectionForm>;

const Template: ComponentStory<typeof SelectCollectionForm> = () => (
  <SelectCollectionForm />
);

export const Default = Template.bind({});
