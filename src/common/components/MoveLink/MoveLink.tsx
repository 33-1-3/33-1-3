import styled from 'styled-components';
import { Link } from 'react-router-dom';

const INFO_MESSAGES = {
  signin: '이미 회원이라면?',
  signup: '아직 회원이 아니라면?',
  github: '질문이 있으신가요?',
};
const LINK_MESSAGES = {
  signin: '로그인!',
  signup: '가입하기!',
  github: '문의 사항 남기기',
};

export interface MoveLinkProps {
  color: string;
  fontSize: string;
  moveTarget: 'signin' | 'signup' | 'github';
}

export interface LinkWrapperProps {
  color: string;
  fontSize: string;
}

const LinkWrapper = styled.div<LinkWrapperProps>`
  display: flex;
  flex-flow: row nowrap;
  gap: 6px;
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  text-underline-position: under;
`;

const MoveLink = ({ color, fontSize, moveTarget, ...props }: MoveLinkProps) => {
  return (
    <LinkWrapper color={color} fontSize={fontSize} {...props}>
      <span>{INFO_MESSAGES[moveTarget]}</span>
      <StyledLink to={`/${moveTarget}`}>{LINK_MESSAGES[moveTarget]}</StyledLink>
    </LinkWrapper>
  );
};

MoveLink.defaultProps = {
  color: 'var(--purple-900)',
  fontSize: 'var(--text-sm)',
};

export default MoveLink;
