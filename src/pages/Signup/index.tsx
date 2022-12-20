import styled from 'styled-components';
import {
  LogoLink,
  MoveLink,
  SignInAndUpForm,
  WaveFooter,
} from '@/common/components';
import axios from 'axios';
import { useState, useEffect } from 'react';

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

const url = `${import.meta.env.VITE_DB_SERVER}signup`;

export default function Signup() {
  const [checkEmail, setCheckEmail] = useState('');

  useEffect(() => {
    checkEmail === 'duplicate' && alert('이미 등록된 이메일입니다.');

    checkEmail === 'success' &&
      alert(
        '등록한 이메일로 인증 메일이 발송되었습니다. 이메일 인증을 완료해주세요.'
      );

    setCheckEmail('');
  }, [checkEmail]);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
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
      </FormContainer>
      <WaveFooter />
    </>
  );
}
