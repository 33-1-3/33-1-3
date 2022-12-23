import axios from 'axios';
import { atom, selector } from 'recoil';

const asyncIsLoginState = selector({
  key: 'asyncIsLoginState',
  get: async ({ get }) => {
    const res = await axios.get(`${import.meta.env.VITE_DB_SERVER}auth`, {
      withCredentials: true,
    });
    const {
      data: { isLogin, userid },
    } = res;
    return isLogin;
  },
});
const asyncUseridState = selector({
  key: 'asyncUseridState',
  get: async ({ get }) => {
    const res = await axios.get(`${import.meta.env.VITE_DB_SERVER}auth`, {
      withCredentials: true,
    });
    const {
      data: { isLogin, userid },
    } = res;
    return userid;
  },
});

export const loginState = atom({
  key: 'loginState',
  default: asyncIsLoginState,
});

// export const loginState = atom<boolean>({
//   key: 'loginState',
//   default: false,
// });

export const userState = atom<string>({
  key: 'userState',
  default: asyncUseridState,
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
