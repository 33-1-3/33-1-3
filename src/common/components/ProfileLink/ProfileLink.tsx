import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

export interface ProfileProps {
  width: string | number;
  height: string | number;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const CircleWrapper = styled.div`
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: 1px solid var(--black);
  overflow: hidden;
`;

const StyledButton = styled.button`
  background: url('/assets/defaultUser.svg');
`;

const ProfileLink = ({ width, height, setIsLogin, ...props }: ProfileProps) => {
  const handleClick = async () => {
    await axios.get('http://localhost:3313/logout', {
      withCredentials: true,
    });

    setIsLogin(false);
  };

  return (
    <CircleWrapper style={{ width: 'fit-content' }} {...props}>
      <StyledButton
        type="button"
        style={{ width, height }}
        onClick={handleClick}
      />
    </CircleWrapper>
  );
};

ProfileLink.defaultProps = {
  width: 40,
  height: 40,
};

export default ProfileLink;
