import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { IconButton } from '@/common/components';
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
  font-size: 28px;
  margin-left: 8px;
  margin-bottom: 8px;
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
  const imgIdx = Math.min(Math.ceil(count / step), 5);
  return (
    <Wrapper style={{ width: '640px' }}>
      <Title>{title}</Title>
      <IconButtons>
        <IconButton
          width={28}
          height={28}
          iconType="pencil"
          clickHandler={() => console.log('TODO: open modal')}
        />
        <IconButton
          width={28}
          height={28}
          iconType="minus"
          clickHandler={() => console.log('TODO: open modal')}
        />
      </IconButtons>
      <Link
        to={`/mycollection/${userId}/${collectionId}`}
        aria-label={`${title} 콜렉션으로 이동`}
      >
        <img
          width="640px"
          height="160px"
          src={`/assets/shelf${imgIdx}.svg`}
          alt=""
          {...props}
        />
      </Link>
    </Wrapper>
  );
};

Bookshelf.defaultProps = {
  step: 10,
};

export default Bookshelf;
