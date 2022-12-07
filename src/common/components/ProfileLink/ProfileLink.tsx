import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface ProfileProps {
  width: string | number;
  height: string | number;
  imgFileName: string;
  userid?: string;
}

const CircleWrapper = styled.div`
  width: fit-content;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: 1px solid var(--black);
  overflow: hidden;
  img {
    object-fit: cover;
  }
`;

const ProfileLink = ({ width, height, imgFileName, userid }: ProfileProps) => {
  return (
    <CircleWrapper>
      <Link
        to={`/mycollections/${userid}`}
        aria-label={`${
          userid === undefined ? '로그인이 필요합니다.' : '내 콜렉션으로 이동'
        }`}
      >
        <img
          src={`/assets/${imgFileName}`}
          alt="Thirty Three Third"
          width={width}
          height={height}
        />
      </Link>
    </CircleWrapper>
  );
};

ProfileLink.defaultProps = {
  width: 40,
  height: 40,
  imgFileName: 'guest.svg',
};

export default ProfileLink;
