import styled from 'styled-components';
import {
  LogoLink,
  MoveLink,
  SignInAndUpForm,
  WaveFooter,
} from '@/common/components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
  margin-top: 20vh;
`;

const AlertMsg = styled.div`
  margin-top: var(--space-bs);
  font-size: var(--text-sm);
  font-weight: 700;
  text-align: center;
`;

const url = `http://localhost:3313/signin`;

export default function Signin() {
  const [checkEmail, setCheckEmail] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const {
      data: { userId, state },
    } = await axios.post(url, { email, password });
    if (userId) navigate('/');
    else setCheckEmail(state);
  };

  return (
    <>
      <FormContainer>
        <HeaderLogo height="72px" width="132px" />
        <SignInAndUpForm submitHandler={submitHandler} option="signin" />
        <MoveLink moveTarget="signup" />
        {checkEmail === 'needAuth' && (
          <AlertMsg>
            인증이 되지 않은 이메일입니다. 이메일 인증을 완료해주세요.
          </AlertMsg>
        )}
        {checkEmail === 'notExist' && (
          <AlertMsg>이메일 혹은 비밀번호가 일치하지 않습니다.</AlertMsg>
        )}
      </FormContainer>
      <WaveFooter />
    </>
  );
}
