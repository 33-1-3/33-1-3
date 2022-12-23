// import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { dialogContentState } from '@/recoil/globalState';

export interface CollectionCheckboxProps {
  title: string;
  width: string;
  isChecked: boolean;
}

export interface CheckboxProps {
  'aria-checked': boolean;
  $width: string;
}

const CheckboxDiv = styled.div<CheckboxProps>/*css*/ `
  display: flex;
  gap: 40px;
  align-items: center;
  max-width: ${({ $width }) => $width};
  cursor: pointer;
  & > span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: normal;
    transform: translateY(2px);
  }
  &::before {
    width: 20px;
    height: 20px;
    content: url('/assets/uncheckedbox.svg');
  }
  &[aria-checked='true']::before {
    width: 20px;
    height: 20px;
    content: url('/assets/checkedbox.svg');
  }
  &:hover {
    cursor: pointer;
  }
  /*
  &:focus,
  &:hover {
    border: 1px solid #005a9c;
    border-radius: 5px;
  }
  */
`;

const CollectionCheckbox = ({
  title,
  width,
  isChecked,
  ...args
}: CollectionCheckboxProps) => {
  const [dialogContent, setDialogContent] = useRecoilState(dialogContentState);

  return (
    <CheckboxDiv
      className={'collection-checkbox'}
      role="checkbox"
      aria-checked={isChecked}
      tabIndex={0}
      $width={width}
      style={{ width: 'fit-content' }}
      onClick={() => {
        setDialogContent({
          ...dialogContent,
          collectionList: [...dialogContent.collectionList].map(
            ({ id, title: _title, isChecked }) =>
              _title === title
                ? { id, title: _title, isChecked: !isChecked }
                : { id, title: _title, isChecked }
          ),
        });
      }}
      {...args}
    >
      <span title={title}>{title}</span>
    </CheckboxDiv>
  );
};

CollectionCheckbox.defaultProps = {
  width: '408px',
};

export default CollectionCheckbox;
