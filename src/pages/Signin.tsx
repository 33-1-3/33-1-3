import { useState, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { loginState, userState } from '@/recoil/globalState';
import {
  LogoLink,
  SignInAndUpLink,
  SignInAndUpForm,
  WaveFooter,
  Alert,
} from '@/components';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FLOATING_MOTION_VALUE } from '@/utils/constants/motion';
import { flexContainer } from '@/styles/mixin';

function Signin() {
  const [isLogIn, setIsLogIn] = useRecoilState(loginState);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [, setUserId] = useRecoilState(userState);
  const [checkEmail, setCheckEmail] = useState('');
  const navigate = useNavigate();

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

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowAlert(false);

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

  const { initial, animate, transition } = FLOATING_MOTION_VALUE;

  return (
    <>
      {checkEmail === 'needAuth' && showAlert && (
        <Alert type="top">
          인증되지 않은 이메일입니다. 이메일 인증을 완료해주세요.
        </Alert>
      )}
      {checkEmail === 'notExist' && showAlert && (
        <Alert type="top">이메일 혹은 비밀번호가 일치하지 않습니다.</Alert>
      )}
      <motion.div initial={initial} animate={animate} transition={transition}>
        <FormContainer>
          <HeaderLogo height="72px" width="132px" />
          <SignInAndUpForm onSubmit={submitHandler} option="signin" />
          <SignInAndUpLink moveTarget="signup" />
        </FormContainer>
      </motion.div>
      <WaveFooter />
    </>
  );
}

const HeaderLogo = styled(LogoLink)`
  margin-bottom: 24px;
`;

const FormContainer = styled.div`
  ${flexContainer({
    d: 'column',
    ai: 'center',
    jc: 'center',
    g: 'var(--space-sm)',
  })}
  margin: auto;
  margin-top: 20vh;
`;

const signinRequestUrl = `${import.meta.env.VITE_DB_SERVER}signin`;

export default Signin;
