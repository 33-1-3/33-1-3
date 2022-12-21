import uuid from 'react-uuid';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { dialogState, createCollectionDialogState } from '@/recoil/globalState';
import axios from 'axios';
import {
  Header,
  Main,
  PageTitle,
  AddCollectionButton,
  Footer,
} from '@/common/components';
import { Bookshelf } from './components';

const MOTION_VALUE = {
  initial: { y: '30px', opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    duration: 1,
    ease: 'easeOut',
  },
};

const MyCollectionsPageTitle = styled(PageTitle)`
  margin-top: 56px;
  margin-bottom: 28px;
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
  const [userNickName, setUserNickName] = useState('');

  const [_, setDialog] = useRecoilState(dialogState);

  const url = `${import.meta.env.VITE_DB_SERVER}collections/${userid}`;

  useEffect(() => {
    async function fetchResults() {
      try {
        const res = await axios.get(url);

        setUserCollections(res.data.collections);
        setUserNickName(res.data.nickname);
      } catch (error) {
        console.error(error);
      }
    }
    fetchResults();
  }, []);

  const { initial, animate, transition } = MOTION_VALUE;

  return (
    <>
      <Header />
      <Main>
        <motion.div initial={initial} animate={animate} transition={transition}>
          <MyCollectionsPageTitle>{`${userNickName}'s Collections`}</MyCollectionsPageTitle>
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
                  userId={userid as string}
                  collectionId={collectionId}
                  title={title}
                  count={vinylCount}
                ></Bookshelf>
              );
            })}
          </CollectionsWrapper>
        </motion.div>
      </Main>
      <Footer />
    </>
  );
}
