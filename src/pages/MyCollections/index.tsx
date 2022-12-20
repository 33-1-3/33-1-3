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
// import { mockUsersData } from '@/utils/mocks/mockInfo';
import axios from 'axios';
import { useEffect, useState } from 'react';

const MyCollectionsPageTitle = styled(PageTitle)`
  margin-top: 56px;
  margin-bottom: 36px;
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

  const [userCollections, setUserCollections] = useState([]);

  // const [userData] = mockUsersData.filter(
  //   (userData) => userData.id === +(userid as string)
  // );
  // const userCollections = userData.collections;
  const [_, setDialog] = useRecoilState(dialogState);

  const url = `${import.meta.env.VITE_DB_SERVER}collections/${userid}`;

  useEffect(() => {
    async function fetchResults() {
      try {
        const res = await axios.get(url);
        const userCollections = res.data;
        setUserCollections(userCollections);
      } catch (error) {
        console.error(error);
      }
    }
    fetchResults();
  }, []);

  return (
    <>
      <Header />
      <Main>
        <MyCollectionsPageTitle>My Collections</MyCollectionsPageTitle>
        <CollectionsWrapper style={{ width: '520px' }}>
          <AddCollectionButton
            onClick={() => setDialog(createCollectionDialogState)}
            size="large"
          />
          {userCollections.map(({ title, collectionId, vinylCount }) => {
            const newUuid = uuid();
            return (
              <Bookshelf
                key={newUuid}
                userId={+(userid as string)}
                collectionId={collectionId}
                title={title}
                count={vinylCount}
              ></Bookshelf>
            );
          })}
        </CollectionsWrapper>
      </Main>
      <Footer />
    </>
  );
}
