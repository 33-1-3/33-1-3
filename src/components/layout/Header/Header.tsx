import { useRecoilValue } from 'recoil';
import { loginState, userState } from '@/recoil/globalState';
import { LogoLink, SearchInput, SquareLink, ProfileLink } from '@/components';
import styled from 'styled-components';
import { absolute, flexContainer } from '@/styles/mixin';
import useHandleSubmit from '@/hooks/useHandleSubmit';

function Header({ ...props }) {
  const isLogIn = useRecoilValue(loginState);
  const userId = useRecoilValue(userState);

  const isMain: boolean = window.location.pathname === '/';

  const showSearchResult = useHandleSubmit();

  return (
    <StyledHeader style={{ height: 64, width: '100vw' }} {...props}>
      <LogoLink height="40px" width="74px" />
      <BetaText>Beta</BetaText>
      {!isMain && isLogIn !== undefined && (
        <SearchInput inputSize="small" onSubmit={showSearchResult} />
      )}
      {isLogIn !== undefined && (
        <SquareLink link={isLogIn ? `/mycollections/${userId}` : '/signin'}>
          My Collections
        </SquareLink>
      )}
      {isLogIn !== undefined &&
        (isLogIn === true ? (
          <ProfileLink />
        ) : (
          <SquareLink
            link={isLogIn ? `/mycollections/${userId}` : '/signin'}
            $isFilled={false}
            $isTransition={true}
          >
            Sign In
          </SquareLink>
        ))}
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  ${flexContainer({ ai: 'center', g: '12px' })}
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--white);
  min-width: 680px;
  padding: 12px 16px;
  box-shadow: var(--shadow-Header);
  z-index: 2000;

  > a:first-child {
    margin-right: auto;
  }
`;

const BetaText = styled.span`
  ${absolute({ l: 96, b: 10 })}
  font-style: italic;
  font-size: var(--text-sm);
  font-weight: 400;
  color: var(--purple-900);
`;

export default Header;
