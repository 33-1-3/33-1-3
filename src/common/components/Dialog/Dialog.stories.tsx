import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dialog from './Dialog';

import { TextInput } from '@/common/components';
import { SelectCollectionForm } from '@/pages/Item/components';

export default {
  title: 'common/components/Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const AddItemDialog = Template.bind({});
AddItemDialog.args = {
  isOpen: true,
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
  confirm: () => console.log('아이템 추가'),
};

export const CreateCollectionDialog = Template.bind({});
CreateCollectionDialog.args = {
  isOpen: true,
  width: 480,
  height: 300,
  title: 'Create Collection',
  children: (
    <TextInput
      errorMsg="최소 두 글자 이상 입력해주세요."
      height={36}
      label="Collection Name"
      placeholder="생성할 콜렉션의 이름을 입력해주세요."
      required
      validationTester={/^.{2,}$/}
      width={416}
    />
  ),
  confirm: () => console.log('콜렉션 생성'),
};

export const DeleteCollectionDialog = Template.bind({});
DeleteCollectionDialog.args = {
  isOpen: true,
  width: 480,
  height: 200,
  children: '콜렉션을 삭제하시겠습니까?',
  confirm: () => console.log('콜렉션 삭제'),
};

export const DeleteItemDialog = Template.bind({});
DeleteItemDialog.args = {
  isOpen: true,
  width: 480,
  height: 200,
  children: '아이템을 삭제하시겠습니까?',
  confirm: () => console.log('아이템 삭제'),
};

export const LongText = Template.bind({});
LongText.args = {
  isOpen: true,
  width: 480,
  height: 200,
  children:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima voluptate vero, nam repellat ipsam reiciendis nemo officiis quis voluptates, commodi animi dolores rem soluta praesentium molestias molestiae ad voluptas?',
  confirm: () => console.log('확인'),
};
