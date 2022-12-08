import styled from 'styled-components';
import { Link } from 'react-router-dom';

const INFO_MESSAGES = {
  signin: '이미 회원이라면?',
  signup: '아직 회원이 아니라면?',
};
const LINK_MESSAGES = {
  signin: '로그인!',
  signup: '가입하기!',
};

export interface MoveFormLinkProps {
  moveTarget: 'signin' | 'signup';
}

const LinkWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 6px;
  color: var(--purple-900);
  font-size: var(--text-sm);
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  text-underline-position: under;
`;

function MoveFormLink({ moveTarget, ...props }: MoveFormLinkProps) {
  return (
    <LinkWrapper {...props}>
      <span {...props}>{INFO_MESSAGES[moveTarget]}</span>
      <StyledLink to={`/${moveTarget}`} {...props}>
        {LINK_MESSAGES[moveTarget]}
      </StyledLink>
    </LinkWrapper>
  );
}

export default MoveFormLink;
