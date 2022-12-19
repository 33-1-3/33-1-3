import styled from 'styled-components';
import {
  LogoLink,
  SearchInput,
  SquareLink,
  ProfileLink,
} from '@/common/components';
import useHandleSubmit from '@/hooks/useHandleSubmit';

export interface HeaderProps {
  isLogin: boolean;
}

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

const Header = ({ isLogin, ...props }: HeaderProps) => {
  const isMain: boolean = window.location.pathname === '/';
  const minWidth = isMain ? '440px' : '680px';

  const SearchInputRender = useHandleSubmit();

  return (
    <StyledHeader style={{ height: 64, width: '100vw', minWidth }} {...props}>
      <LogoLink height="40px" width="74px" />
      {!isMain && <SearchInput size="small" handleSubmit={SearchInputRender} />}
      <SquareLink link="/mycollections/1" width={178}>
        My Collections
      </SquareLink>
      {isLogin ? (
        <ProfileLink userid="ulgoon" />
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
