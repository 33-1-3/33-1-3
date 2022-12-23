import { dialogContentState } from '@/recoil/globalState';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { CollectionCheckbox } from '../../../pages/Item/components';
import ToggleInputButton from './ToggleInputButton';

const CollectionList = styled.ul`
  margin-top: var(--space-xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`;

const SelectCollectionForm = () => {
  const [dialogContent] = useRecoilState(dialogContentState);

  return (
    <>
      <ToggleInputButton />
      <CollectionList>
        {dialogContent.collectionList.map(({ title, isChecked }) => (
          <li key={title}>
            <CollectionCheckbox title={title} isChecked={isChecked} />
          </li>
        ))}
      </CollectionList>
    </>
  );
};

SelectCollectionForm.defaultProps = {
  collectionList: [],
};

export default SelectCollectionForm;
