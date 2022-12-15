import { atom } from 'recoil';
import { TextInput } from '@/common/components';
import { SelectCollectionForm } from '@/pages/Item/components';
import { DialogProps } from '@/common/components/Dialog/Dialog';

export const initialDialogState = {
  isOpen: false,
  width: 0,
  height: 0,
  title: '',
  children: null,
  confirm: () => console.log('Dialog confirm button clicked.'),
};

export const addItemDialogState = {
  isOpen: true,
  width: 480,
  height: 480,
  title: 'Add Items',
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

export const deleteItemDialogState = {
  isOpen: true,
  width: 480,
  height: 200,
  children: '아이템을 삭제하시겠습니까?',
  confirm: () => console.log('아이템 삭제'),
};

export const createCollectionDialogState = {
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

export const editCollectionDialogState = {
  isOpen: true,
  width: 480,
  height: 300,
  title: 'Edit Name',
  children: (
    <TextInput
      errorMsg="최소 두 글자 이상 입력해주세요."
      height={36}
      label="Collection Name"
      placeholder="수정할 콜렉션의 이름을 입력해주세요."
      required
      validationTester={/^.{2,}$/}
      width={416}
    />
  ),
  confirm: () => console.log('콜렉션 수정'),
};

export const deleteCollectionDialogState = {
  isOpen: true,
  width: 480,
  height: 200,
  children: '콜렉션을 삭제하시겠습니까?',
  confirm: () => console.log('콜렉션 삭제'),
};

export const editWritableInfoDialogState = {
  isOpen: true,
  width: 480,
  height: 480,
  title: 'Edit Information',
  children: null,
  confirm: () => console.log('소장 음반 정보 수정'),
};

export const dialogState = atom<DialogProps>({
  key: 'dialogState',
  default: initialDialogState,
});
