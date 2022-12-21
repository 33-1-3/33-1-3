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

const Template: ComponentStory<typeof SelectCollectionForm> = (args) => (
  <SelectCollectionForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  collectionList: [],
};

export const List = Template.bind({});
List.args = {
  collectionList: [
    { title: '소장 중 💼', isChecked: false },
    { title: '갖고 싶다... 🤤', isChecked: true },
    { title: '❤K-POP❤', isChecked: false },
    {
      title: '엄청엄청긴타이트으으응으ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ일때',
      isChecked: false,
    },
  ],
};
