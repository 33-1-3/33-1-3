import styled from 'styled-components';
import {
  LogoLink,
  MoveFormLink,
  SignInAndUpForm,
  WaveFooter,
} from '@/common/components';

const HeaderLogo = styled(LogoLink)`
  margin: 60px 0 24px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: var(--space-sm);
`;

export default function Signin() {
  return (
    <>
      <FormContainer>
        <HeaderLogo height="72px" width="132px" />
        <SignInAndUpForm option="signin" />
        <MoveFormLink moveTarget="signup" />
      </FormContainer>
      <WaveFooter />
    </>
  );
}
