import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

export interface CollectionCheckboxProps {
  title: string;
  width: string;
  collectionId: string;
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<{ [key: string]: boolean }>>;
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
  collectionId,
  isChecked,
  setIsChecked,
  ...args
}: CollectionCheckboxProps) => {
  return (
    <CheckboxDiv
      role="checkbox"
      aria-checked={isChecked}
      tabIndex={0}
      width={width}
      onClick={() => {
        setIsChecked((state) => {
          const newState = { ...state };
          newState[collectionId] = !state[collectionId];
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
  isChecked: false,
};

export default CollectionCheckbox;
