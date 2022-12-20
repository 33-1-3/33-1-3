import { SelectCollectionForm } from '@/pages/Item/components';
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
  children: (
    <SelectCollectionForm
      collectionList={[
        {
          isChecked: false,
          title: '소장 중 💼',
        },
        {
          isChecked: true,
          title: '갖고 싶다... 🤤',
        },
        {
          isChecked: false,
          title: '❤K-POP❤',
        },
        {
          isChecked: false,
          title: '엄청엄청긴타이트으으응으ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ일때',
        },
      ]}
    />
  ),
  onConfirm: () => console.log('아이템 추가'),
  onClose: () => console.log('모달 닫기'),
};
