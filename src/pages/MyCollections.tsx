import uuid from 'react-uuid';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRecoilState } from 'recoil';
import {
  dialogContentState,
  dialogState,
  loginState,
  userState,
} from '@/recoil/globalState';
import axios from 'axios';
import {
  Header,
  Main,
  PageTitle,
  AddCollectionButton,
  Footer,
  InquiryButton,
  GoToTopButton,
  NewDialog,
  TextInput,
  Bookshelf,
} from '@/components';

const MOTION_VALUE = {
  initial: { y: '30px', opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    duration: 1,
    ease: 'easeOut',
  },
};

function MyCollections() {
  const { userid } = useParams();

  const [userCollections, setUserCollections] = useState([]);
  const [userNickName, setUserNickName] = useState('');

  const [isLogin] = useRecoilState(loginState);
  const [userId] = useRecoilState(userState);
  const [dialogType, setDialogType] = useRecoilState(dialogState);
  const [dialogContent] = useRecoilState(dialogContentState);

  const url = `${import.meta.env.VITE_DB_SERVER}collections/${userid}`;

  useEffect(() => setDialogType(''), []);

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
  }, [dialogType]);

  const { initial, animate, transition } = MOTION_VALUE;

  return (
    <>
      <Header />
      <Main>
        <motion.div initial={initial} animate={animate} transition={transition}>
          <PageTitle
            marginTop={'64px'}
            marginBottom={'48px'}
          >{`${userNickName}'s Collections`}</PageTitle>
          <CollectionsWrapper style={{ width: '520px' }}>
            {isLogin && (
              <AddCollectionButton
                onClick={() => setDialogType('create-collection')}
                size="large"
              />
            )}
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
        <InquiryButton />
        <GoToTopButton />
      </Main>
      <Footer />
      <NewDialog
        isOpened={dialogType === 'create-collection'}
        width={480}
        height={300}
        title="Create Collection"
        onConfirm={async (e) => {
          const title = (e.target as HTMLElement).querySelector('input')?.value;
          await axios.post(
            `${import.meta.env.VITE_DB_SERVER}collections/${userId}`,
            {
              title: title,
            }
          );
        }}
        onClose={() => setDialogType('')}
      >
        {/* TODO: errorMsg가 표시되는 동안에는 모달 Confirm 불가능하도록 */}
        <TextInput
          $width={416}
          $height={36}
          label="Collection Name"
          placeholder="생성할 콜렉션의 이름을 입력해주세요."
          required={true}
          validationTester={/^.{1,}$/}
          errorMsg="최소 한 글자 이상 입력해주세요."
        ></TextInput>
      </NewDialog>
      <NewDialog
        isOpened={dialogType === 'edit-collection'}
        width={480}
        height={300}
        title="Edit Collection Name"
        onConfirm={async (e) => {
          const title = (e.target as HTMLElement).querySelector('input')?.value;
          await axios.put(
            `${import.meta.env.VITE_DB_SERVER}collections/${
              dialogContent.collectionId
            }`,
            {
              title: title,
            }
          );
        }}
        onClose={() => setDialogType('')}
      >
        {/* TODO: errorMsg가 표시되는 동안에는 모달 Confirm 불가능하도록 */}
        <TextInput
          $width={416}
          $height={36}
          label="Collection Name"
          placeholder="수정할 콜렉션의 이름을 입력해주세요."
          required={true}
          validationTester={/^.{1,}$/}
          errorMsg="최소 한 글자 이상 입력해주세요."
          value={dialogContent.collectionTitle}
        ></TextInput>
      </NewDialog>
      <NewDialog
        isOpened={dialogType === 'delete-collection'}
        width={480}
        height={200}
        onConfirm={async () => {
          await axios.delete(
            `${import.meta.env.VITE_DB_SERVER}collections/${
              dialogContent.collectionId
            }`
          );
        }}
        onClose={() => setDialogType('')}
      >
        콜렉션을 삭제하시겠습니까?
      </NewDialog>
    </>
  );
}

const CollectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  min-width: 680px;
  max-width: 828px;
  margin: 0 auto;
  text-align: center;
`;

export default MyCollections;
