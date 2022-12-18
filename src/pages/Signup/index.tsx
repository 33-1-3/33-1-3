import styled from 'styled-components';
import {
  LogoLink,
  MoveLink,
  SignInAndUpForm,
  WaveFooter,
} from '@/common/components';
import axios from 'axios';
import { useState } from 'react';

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

const AlertMsg = styled.div`
  margin-top: var(--space-bs);
  font-size: var(--text-sm);
  font-weight: 700;
  text-align: center;
`;

const url = `http://localhost:3313/signup`;

export default function Signup() {
  const [checkEmail, setCheckEmail] = useState();
  const submitHandler = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const nickname = e.target[1].value;
    const password = e.target[2].value;
    const {
      data: { state },
    } = await axios.post(url, {
      email,
      nickname,
      password,
    });

    setCheckEmail(state);
  };

  return (
    <>
      <FormContainer>
        <HeaderLogo height="72px" width="132px" />
        <SignInAndUpForm submitHandler={submitHandler} option="signup" />
        <MoveLink moveTarget="signin" />
        {checkEmail === 'duplicate' && (
          <AlertMsg>이미 등록된 이메일 입니다.</AlertMsg>
        )}
        {checkEmail == 'success' && (
          <AlertMsg>
            등록한 이메일로 인증 메일이 발송되었습니다.
            <br />
            이메일 인증을 완료해주세요.
          </AlertMsg>
        )}
      </FormContainer>
      <WaveFooter />
    </>
  );
}
