import { useParams } from 'react-router-dom';
import uuid from 'react-uuid';
import styled from 'styled-components';
import {
  Header,
  Main,
  PageTitle,
  AddCollectionButton,
  Footer,
  TextInput,
} from '@/common/components';
import { Bookshelf } from './components';
import { mockUsersData } from '@/utils/mockInfo';
import { useRecoilState } from 'recoil';
import { dialogState } from '@/recoil/globalState';

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
  const [_, setDialog] = useRecoilState(dialogState);

  return (
    <>
      <Header />
      <Main>
        <MyCollectionsPageTitle>My Collections</MyCollectionsPageTitle>
        <CollectionsWrapper style={{ width: '640px' }}>
          <AddCollectionButton
            onClick={() =>
              setDialog({
                isOpen: true,
                width: 480,
                height: 300,
                title: 'Create Collection',
                children: (
                  <TextInput
                    errorMsg="최소 두 글자 이상 입력해주세요."
                    height={36}
                    label="Collection Name"
                    placeholder="생성할 콜렉션의 이름을 입력해주세요."
                    required
                    validationTester={/^.{2,}$/}
                    width={416}
                  />
                ),
                confirm: () => console.log('콜렉션 생성'),
              })
            }
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
