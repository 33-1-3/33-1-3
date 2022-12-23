import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { IconButton } from '@/common/components';
import {
  dialogContentState,
  dialogState,
  userState,
} from '@/recoil/globalState';
import { useState, useLayoutEffect } from 'react';

export interface BookshelfProps {
  userId: string;
  collectionId: string;
  title: string;
  count: number;
  step: number;
}

const Wrapper = styled.div`
  position: relative;
`;

const Title = styled.div`
  max-width: 432px;
  font-size: 22px;
  margin-left: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-align: start;
  text-overflow: ellipsis;
`;

const IconButtons = styled.div`
  position: absolute;
  top: 2px;
  right: 0;
  display: flex;
  gap: 8px;
  margin-right: 8px;
`;

const Bookshelf = ({
  userId,
  collectionId,
  title,
  count,
  step,
  ...props
}: BookshelfProps) => {
  // const [isUserCollections, setIsUserCollections] = useState<boolean>(false);
  const { userid } = useParams();

  const [isLogin, setIsLogin] = useRecoilState(userState);
  const [, setDialogType] = useRecoilState(dialogState);
  const [dialogContent, setDialogContent] = useRecoilState(dialogContentState);
  const imgIdx = Math.min(Math.ceil(count / step), 5);

  // useLayoutEffect(() => {
  //   async function checkAuth() {
  //     try {
  //       const res = await axios.get('http://localhost:3313/auth', {
  //         withCredentials: true,
  //       });
  //       const {
  //         data: { isLogin, userId },
  //       } = res;

  //       if (isLogin && userId === userid) {
  //         setIsUserCollections(true);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   checkAuth();
  // }, [isUserCollections]);

  return (
    <Wrapper style={{ width: '520px', height: 'fit-content' }}>
      <Title>{title}</Title>
      {isLogin && (
        <IconButtons>
          <IconButton
            width={22}
            height={22}
            iconType="pencil"
            clickHandler={() => {
              setDialogContent({
                ...dialogContent,
                collectionId: collectionId,
                collectionTitle: title,
              });
              setDialogType('edit-collection');
            }}
          />
          <IconButton
            width={22}
            height={22}
            iconType="minus"
            clickHandler={() => {
              setDialogContent({
                ...dialogContent,
                collectionId: collectionId,
              });
              setDialogType('delete-collection');
            }}
          />
        </IconButtons>
      )}
      <Link
        to={`/mycollection/${userId}/${collectionId}`}
        aria-label={`${title} 콜렉션으로 이동`}
      >
        <img
          width="520px"
          height="130px"
          src={`/assets/shelf${imgIdx}.svg`}
          alt=""
          {...props}
        />
      </Link>
    </Wrapper>
  );
};

Bookshelf.defaultProps = {
  width: '520px',
  height: '130px',
  step: 10,
};

export default Bookshelf;
