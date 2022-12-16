import { useParams } from 'react-router-dom';
import uuid from 'react-uuid';
import styled from 'styled-components';
import {
  Header,
  Main,
  PageTitle,
  AddCollectionButton,
  Footer,
} from '@/common/components';
import { Bookshelf } from './components';
import { useRecoilState } from 'recoil';
import { dialogState, createCollectionDialogState } from '@/recoil/globalState';
import { mockUsersData } from '@/utils/mocks/mockInfo';

const MyCollectionsPageTitle = styled(PageTitle)`
  margin-top: 56px;
  margin-bottom: 44px;
`;

const CollectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 0 auto;
`;

export default function MyCollections() {
  const params = useParams();
  const { userid } = params;
  const [userData] = mockUsersData.filter(
    (userData) => userData.id === +(userid as string)
  );
  const userCollections = userData.collections;
  const [_, setDialog] = useRecoilState(dialogState);

  return (
    <>
      <Header />
      <Main>
        <MyCollectionsPageTitle>My Collections</MyCollectionsPageTitle>
        <CollectionsWrapper style={{ width: '640px' }}>
          <AddCollectionButton
            onClick={() => setDialog(createCollectionDialogState)}
            size="large"
          />
          {userCollections.map((collection) => (
            <Bookshelf
              key={uuid()}
              userId={+(userid as string)}
              collectionId={collection.id}
              title={collection.title}
              count={collection.albums.length}
            ></Bookshelf>
          ))}
        </CollectionsWrapper>
      </Main>
      <Footer />
    </>
  );
}
