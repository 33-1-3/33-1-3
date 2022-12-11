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
  const userid = +useParams().userid;
  const [userData] = mockUsersData.filter((userData) => userData.id === userid);
  const userCollections = userData.collections;
  console.log(userCollections);

  return (
    <>
      <Header />
      <Main>
        <MyCollectionsPageTitle>My Collections</MyCollectionsPageTitle>
        <CollectionsWrapper style={{ width: '640px' }}>
          <AddCollectionButton
            onClick={() => {
              console.log('TODO: open modal');
            }}
            size="large"
          />
          {userCollections.map((collection) => {
            const newUuid = uuid();
            return (
              <Bookshelf
                key={newUuid}
                userId={userid}
                collectionId={collection.id}
                title={collection.title}
                count={collection.albums.length}
              ></Bookshelf>
            );
          })}
        </CollectionsWrapper>
      </Main>
      <Footer />
    </>
  );
}
