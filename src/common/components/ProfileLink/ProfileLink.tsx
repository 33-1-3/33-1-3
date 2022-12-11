import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface ProfileProps {
  width: string | number;
  height: string | number;
  imgFileName: string;
  userid: string;
}

const CircleWrapper = styled.div`
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: 1px solid var(--black);
  overflow: hidden;
  img {
    object-fit: cover;
  }
`;

const ProfileLink = ({
  width,
  height,
  imgFileName,
  userid,
  ...props
}: ProfileProps) => {
  return (
    <CircleWrapper style={{ width: 'fit-content' }} {...props}>
      <Link
        to={`/mycollections/${userid}`}
        aria-label={`${'내 콜렉션으로 이동'}`}
      >
        <img
          src={`/assets/${imgFileName}`}
          alt="프로필 이미지"
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
  imgFileName: 'defaultUser.svg',
};

export default ProfileLink;
