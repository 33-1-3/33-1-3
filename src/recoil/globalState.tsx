import { atom } from 'recoil';
import { DialogProps } from '@/common/components/Dialog/Dialog';

export const initialDialogState = {
  isOpen: false,
  width: 0,
  height: 0,
  title: '',
  children: null,
  confirm: () => console.log('Dialog confirm button clicked.'),
};

export const dialogState = atom<DialogProps>({
  key: 'dialogState',
  default: initialDialogState,
});
