import styled from 'styled-components';
import axios from 'axios';
import {
  LogoLink,
  SearchInput,
  SquareLink,
  ProfileLink,
} from '@/common/components';
import useHandleSubmit from '@/hooks/useHandleSubmit';
import { useEffect, useState } from 'react';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  background-color: var(--white);
  padding: 12px 16px;
  gap: 12px;
  box-shadow: var(--shadow-Header);
  z-index: 2000;

  > a:first-child {
    margin-right: auto;
  }
`;

const Header = ({ ...props }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userId, setUserId] = useState('');

  const isMain: boolean = window.location.pathname === '/';
  const minWidth = isMain ? '440px' : '680px';

  const SearchInputRender = useHandleSubmit();

  useEffect(() => {
    async function auth() {
      try {
        const res = await axios.get('http://localhost:3313/auth', {
          withCredentials: true,
        });
        const {
          data: { isLogin, userId },
        } = res;

        setIsLogin(isLogin);
        setUserId(userId);
      } catch (error) {
        console.log(error);
      }
    }
    auth();
  }, [isLogin, userId]);

  return (
    <StyledHeader style={{ height: 64, width: '100vw', minWidth }} {...props}>
      <LogoLink height="40px" width="74px" />
      {!isMain && <SearchInput size="small" handleSubmit={SearchInputRender} />}
      <SquareLink
        link={isLogin ? `/mycollections/${userId}` : '/signin'}
        width={178}
      >
        My Collections
      </SquareLink>
      {isLogin ? (
        <ProfileLink setIsLogin={setIsLogin} />
      ) : (
        <SquareLink
          backgroundColor="var(--white)"
          color="var(--purple-900)"
          link="/signin"
          transition
          width={97}
        >
          Sign In
        </SquareLink>
      )}
    </StyledHeader>
  );
};

Header.defaultProps = {
  isLogin: false,
};

export default Header;
