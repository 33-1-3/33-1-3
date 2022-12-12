export interface DropdownContentType {
  key: string;
  value: string;
}

export const SORT_CONTENT: DropdownContentType[] = [
  {
    key: 'default',
    value: '정렬 방식',
  },
  {
    key: 'default',
    value: '정확도순',
  },
  {
    key: 'date',
    value: '최신순',
  },
];

export const SORT_LABEL = '정렬 방식 선택';

export const VIEW_CONTENT: DropdownContentType[] = [
  {
    key: 'default',
    value: '보기 방식',
  },
  {
    key: 'block',
    value: '블록',
  },
  {
    key: 'list',
    value: '리스트',
  },
];

export const VIEW_LABEL = '보기 방식 선택';
