import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { IconButton } from '@/common/components';
import {
  dialogState,
  editCollectionDialogState,
  initialDialogState,
  // deleteCollectionDialogState,
} from '@/recoil/globalState';

export interface BookshelfProps {
  userId: number;
  collectionId: number;
  title: string;
  count: number;
  step: number;
}

const Wrapper = styled.div`
  position: relative;
`;

const Title = styled.div`
  font-size: 22px;
  margin-left: 8px;
`;

const IconButtons = styled.div`
  position: absolute;
  top: 0;
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
  const [_, setDialog] = useRecoilState(dialogState);
  const imgIdx = Math.min(Math.ceil(count / step), 5);
  return (
    <Wrapper style={{ width: '520px', height: 'fit-content' }}>
      <Title>{title}</Title>
      <IconButtons>
        <IconButton
          width={22}
          height={22}
          iconType="pencil"
          clickHandler={() => setDialog(editCollectionDialogState)}
        />
        <IconButton
          width={22}
          height={22}
          iconType="minus"
          clickHandler={() =>
            setDialog({
              isOpen: true,
              width: 480,
              height: 200,
              children: '콜렉션을 삭제하시겠습니까?',
              confirm: async () => {
                await axios.delete(
                  `http://localhost:3313/collections/${collectionId}`
                );
                setDialog(initialDialogState);
                location.reload();
              },
            })
          }
        />
      </IconButtons>
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
