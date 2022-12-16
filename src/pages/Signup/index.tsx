import styled from 'styled-components';
import {
  LogoLink,
  MoveLink,
  SignInAndUpForm,
  WaveFooter,
} from '@/common/components';

const HeaderLogo = styled(LogoLink)`
  margin-bottom: 24px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: var(--space-sm);
  margin: auto;
  margin-top: 15vh;
`;

export default function Signin() {
  return (
    <>
      <FormContainer>
        <HeaderLogo height="72px" width="132px" />
        <SignInAndUpForm option="signup" />
        <MoveLink moveTarget="signin" />
      </FormContainer>
      <WaveFooter />
    </>
  );
}
