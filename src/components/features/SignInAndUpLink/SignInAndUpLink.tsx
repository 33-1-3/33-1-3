import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flexContainer } from '@/styles/mixin';
import { LINK_INFO } from '@/utils/constants/signInAndUp';

function SignInAndUpLink({ moveTarget, ...props }: SignInAndUpLinkProps) {
  const { help, target } = LINK_INFO[moveTarget];

  return (
    <LinkWrapper {...props}>
      <span>{help}</span>
      <StyledLink to={`/${moveTarget}`}>{target}</StyledLink>
    </LinkWrapper>
  );
}

const LinkWrapper = styled.div`
  ${flexContainer({ d: 'row', w: 'nowrap', g: '6px' })}
  color: var(--purple-900);
  font-size: var(--text-sm);
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  text-underline-position: under;
`;

export default SignInAndUpLink;
