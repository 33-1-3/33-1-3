import { useState } from 'react';
import styled from 'styled-components';
import CollectionCheckbox from '../CollectionCheckbox/CollectionCheckbox';
import ToggleInputButton from './ToggleInputButton';

export interface FormProps {
  collectionList: { title: string; isChecked: boolean }[];
}

const CollectionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  li:last-child {
    margin-bottom: var(--space-xl);
  }
`;

const SelectCollectionForm = ({
  collectionList: _collectionList,
}: FormProps) => {
  const [collectionList, setCollectionList] = useState(_collectionList);

  return (
    <>
      <CollectionList>
        {collectionList.map(({ title, isChecked }) => (
          <li key={title}>
            <CollectionCheckbox
              title={title}
              isChecked={isChecked}
              setCollectionList={setCollectionList}
            />
          </li>
        ))}
      </CollectionList>
      <ToggleInputButton setCollectionList={setCollectionList} />
    </>
  );
};

SelectCollectionForm.defaultProps = {
  collectionList: [],
};

export default SelectCollectionForm;
