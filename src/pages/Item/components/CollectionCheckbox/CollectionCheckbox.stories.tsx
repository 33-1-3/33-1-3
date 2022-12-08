import { ComponentStory, ComponentMeta } from '@storybook/react';

import CollectionCheckbox from './CollectionCheckbox';

export default {
  title: 'pages/Item/CollectionCheckbox',
  component: CollectionCheckbox,
} as ComponentMeta<typeof CollectionCheckbox>;

const Template: ComponentStory<typeof CollectionCheckbox> = (args) => (
  <CollectionCheckbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: '소장 중 👜',
  collectionId: 'abc123',
  isChecked: false,
  setIsChecked() {},
};

export const Overflow = Template.bind({});
Overflow.args = {
  title:
    '부모 width를 넘어갈 때는 ellipsis 적용 부모 width를 넘어갈 때는 ellipsis 적용 부모 width를 넘어갈 때는 ellipsis 적용 부모 width를 넘어갈 때는 ellipsis 적용 부모 width를 넘어갈 때는 ellipsis 적용',
  width: '1000px',
  collectionId: 'abc123',
  isChecked: true,
  setIsChecked() {},
};
