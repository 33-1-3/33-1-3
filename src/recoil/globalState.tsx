import { atom } from 'recoil';

export const loginState = atom<boolean>({
  key: 'loginState',
  default: false,
});

export const userState = atom<string>({
  key: 'userState',
  default: '',
});

export const dialogState = atom<
  | ''
  | 'add-item'
  | 'create-collection'
  | 'edit-collection'
  | 'delete-collection'
  | 'delete-item'
>({
  key: 'dialogState',
  default: '',
});

export interface dialogContentProps {
  releasedId: string;
  collectionId: string;
  collectionTitle: string;
  collectionList: { id?: string; title: string; isChecked: boolean }[];
}

export const dialogContentState = atom<dialogContentProps>({
  key: 'dialogContentState',
  default: {
    releasedId: '',
    collectionId: '',
    collectionTitle: '',
    collectionList: [],
  },
});
