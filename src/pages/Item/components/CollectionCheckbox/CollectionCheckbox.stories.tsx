import { ComponentStory, ComponentMeta } from '@storybook/react';

import CollectionCheckbox from './CollectionCheckbox';

export default {
  title: 'pages/Item/CollectionCheckbox',
  component: CollectionCheckbox,
  parameters: {
    design: {
      url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=181%3A1718&t=JOCdXu2NkTWZ4lBV-4',
    },
  },
} as ComponentMeta<typeof CollectionCheckbox>;

const Template: ComponentStory<typeof CollectionCheckbox> = (args) => (
  <CollectionCheckbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: '소장 중 👜',
  isChecked: false,
};

export const Overflow = Template.bind({});
Overflow.args = {
  title:
    '부모 width를 넘어갈 때는 ellipsis 적용 부모 width를 넘어갈 때는 ellipsis 적용 부모 width를 넘어갈 때는 ellipsis 적용 부모 width를 넘어갈 때는 ellipsis 적용 부모 width를 넘어갈 때는 ellipsis 적용',
  width: '1000px',
  isChecked: true,
};
