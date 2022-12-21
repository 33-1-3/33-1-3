import styled from 'styled-components';
import {
  LogoLink,
  MoveLink,
  SignInAndUpForm,
  WaveFooter,
} from '@/common/components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
  margin-top: 20vh;
`;

const url = `${import.meta.env.VITE_DB_SERVER}signin`;

export default function Signin() {
  const [checkEmail, setCheckEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    checkEmail === 'needAuth' &&
      alert('인증이 되지 않은 이메일입니다. 이메일 인증을 완료해주세요.');

    checkEmail === 'notExist' &&
      alert('이메일 혹은 비밀번호가 일치하지 않습니다.');

    setCheckEmail('');
  }, [checkEmail]);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = (e.currentTarget[0] as HTMLInputElement).value;
    const password = (e.currentTarget[1] as HTMLInputElement).value;
    const {
      data: { userId, state },
    } = await axios.post(url, { email, password }, { withCredentials: true });
    if (userId) navigate('/');
    else setCheckEmail(state);
  };

  return (
    <>
      <FormContainer>
        <HeaderLogo height="72px" width="132px" />
        <SignInAndUpForm submitHandler={submitHandler} option="signin" />
        <MoveLink moveTarget="signup" />
      </FormContainer>
      <WaveFooter />
    </>
  );
}
