import { SelectCollectionForm } from '@/common/components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NewDialog from './NewDialog';

export default {
  title: 'common/components/NewDialog',
  component: NewDialog,
} as ComponentMeta<typeof NewDialog>;

const Template: ComponentStory<typeof NewDialog> = (args) => (
  <NewDialog {...args} />
);

export const AddItemDialog = Template.bind({});
AddItemDialog.args = {
  isOpened: true,
  width: 480,
  height: 480,
  title: 'Add Item',
  children: <SelectCollectionForm />,
  onConfirm: () => console.log('아이템 추가'),
  onClose: () => console.log('모달 닫기'),
};
