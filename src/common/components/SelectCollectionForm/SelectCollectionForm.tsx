import { dialogContentState } from '@/recoil/globalState';
// import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { CollectionCheckbox } from '../../../pages/Item/components';
import ToggleInputButton from './ToggleInputButton';

// export interface FormProps {
//   collectionList: { id?: string; title: string; isChecked: boolean }[];
// }

const CollectionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  li:last-child {
    margin-bottom: var(--space-xl);
  }
`;

const SelectCollectionForm = () => {
  // const [collectionList, setCollectionList] = useState(_collectionList);
  const [dialogContent] = useRecoilState(dialogContentState);

  return (
    <>
      <CollectionList>
        {dialogContent.collectionList.map(({ title, isChecked }) => (
          <li key={title}>
            <CollectionCheckbox
              title={title}
              isChecked={isChecked}
              // setCollectionList={setCollectionList}
            />
          </li>
        ))}
      </CollectionList>
      <ToggleInputButton />
    </>
  );
};

SelectCollectionForm.defaultProps = {
  collectionList: [],
};

export default SelectCollectionForm;
