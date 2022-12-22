// import { authState } from '@/recoil/globalState';
import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { useRecoilState } from 'recoil';
import { loginState, userState } from '@/recoil/globalState';
import styled from 'styled-components';

export interface ProfileProps {
  width: string | number;
  height: string | number;
  // setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const CircleWrapper = styled.div`
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: 1px solid var(--purple-900);
  overflow: hidden;
`;

const StyledButton = styled.button`
  background: url('/assets/logout.svg') no-repeat center;
`;

const ProfileLink = ({ width, height, ...props }: ProfileProps) => {
  const handleClick = async () => {
    await axios.get(`${import.meta.env.VITE_DB_SERVER}logout`, {
      withCredentials: true,
    });

    location.reload();
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
