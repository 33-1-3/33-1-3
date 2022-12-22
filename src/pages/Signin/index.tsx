import styled from 'styled-components';
import {
  LogoLink,
  MoveLink,
  SignInAndUpForm,
  WaveFooter,
  Alert,
} from '@/common/components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useLayoutEffect } from 'react';
import { useRecoilState } from 'recoil';
import { loginState, userState } from '@/recoil/globalState';
// import { authState } from '@/recoil/globalState';

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

// const authRequestUrl = `${import.meta.env.VITE_DB_SERVER}auth`;
const signinRequestUrl = `${import.meta.env.VITE_DB_SERVER}signin`;
// import { userState } from '../../recoil/globalState';

export default function Signin() {
  const [isLogIn, setIsLogIn] = useRecoilState(loginState);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [userId, setUserId] = useRecoilState(userState);
  // const [auth, setAuth] = useRecoilState(authState);
  const [checkEmail, setCheckEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => setShowAlert(false), 4000);
    }
  }, [showAlert]);

  useLayoutEffect(() => {
    //   async function auth() {
    //     const {
    //       data: { isLogin },
    //     } = await axios.get(authRequestUrl, {
    //       withCredentials: true,
    //     });

    //     isLogin && navigate('/');
    //   }
    //   auth();
    // TODO: 오류?
    isLogIn && navigate('/');
  }, []);

  // useEffect(() => {
  //   checkEmail === 'needAuth' &&
  //     alert('인증이 되지 않은 이메일입니다. 이메일 인증을 완료해주세요.');

  //   checkEmail === 'notExist' &&
  //     alert('이메일 혹은 비밀번호가 일치하지 않습니다.');

  //   setCheckEmail('');
  // }, [checkEmail]);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = (e.currentTarget[0] as HTMLInputElement).value;
    const password = (e.currentTarget[1] as HTMLInputElement).value;

    (e.target as HTMLFormElement).reset();
    (
      e.currentTarget[e.currentTarget.length - 1] as HTMLButtonElement
    ).disabled = true;
    (e.currentTarget[0] as HTMLInputElement).focus();

    const {
      data: { userId, state },
    } = await axios.post(
      signinRequestUrl,
      { email, password },
      { withCredentials: true }
    );

    if (userId) {
      setIsLogIn(true);
      setUserId(userId);
      navigate('/');
    } else {
      setCheckEmail(state);
      setShowAlert(true);
    }
  };

  return (
    <>
      {checkEmail === 'needAuth' && showAlert && (
        <Alert width="fit-content" height="fit-content" type="top">
          인증이 되지 않은 이메일입니다. 이메일 인증을 완료해주세요.
        </Alert>
      )}
      {checkEmail === 'notExist' && showAlert && (
        <Alert width="fit-content" height="fit-content" type="top">
          이메일 혹은 비밀번호가 일치하지 않습니다.
        </Alert>
      )}
      <FormContainer>
        <HeaderLogo height="72px" width="132px" />
        <SignInAndUpForm submitHandler={submitHandler} option="signin" />
        <MoveLink moveTarget="signup" />
      </FormContainer>
      <WaveFooter />
    </>
  );
}
