import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

export interface CollectionCheckboxProps {
  title: string;
  width: string;
  isChecked: boolean;
  setCollectionList: Dispatch<
    SetStateAction<{ title: string; isChecked: boolean }[]>
  >;
}

export interface CheckboxProps {
  'aria-checked': boolean;
  width: string;
}

const CheckboxDiv = styled.div<CheckboxProps>/*css*/ `
  display: flex;
  gap: 40px;
  align-items: center;
  width: fit-content;
  max-width: ${({ width }) => width};
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
  setCollectionList,
  ...args
}: CollectionCheckboxProps) => {
  return (
    <CheckboxDiv
      role="checkbox"
      aria-checked={isChecked}
      tabIndex={0}
      width={width}
      onClick={() => {
        setCollectionList((state) => {
          const newState = [...state].map(({ title: _title, isChecked }) =>
            _title === title
              ? { title: _title, isChecked: !isChecked }
              : { title: _title, isChecked }
          );
          return newState;
        });
      }}
      {...args}
    >
      <span>{title}</span>
    </CheckboxDiv>
  );
};

CollectionCheckbox.defaultProps = {
  width: '408px',
};

export default CollectionCheckbox;
