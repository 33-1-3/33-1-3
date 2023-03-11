import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FLOATING_MOTION_VALUE } from '@/utils/constants/motion';
import {
  LogoLink,
  SignInAndUpLink,
  SignInAndUpForm,
  WaveFooter,
  Alert,
} from '@/components';
import axios from 'axios';
import { useState } from 'react';

function Signup() {
  const [checkEmail, setCheckEmail] = useState('');
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setShowAlert(false);

    const email = (e.currentTarget[0] as HTMLInputElement).value;
    const nickname = (e.currentTarget[1] as HTMLInputElement).value;
    const password = (e.currentTarget[2] as HTMLInputElement).value;

    (e.target as HTMLFormElement).reset();
    (
      e.currentTarget[e.currentTarget.length - 1] as HTMLButtonElement
    ).disabled = true;
    (e.currentTarget[0] as HTMLInputElement).focus();

    const {
      data: { state },
    } = await axios.post(url, {
      email,
      nickname,
      password,
    });

    setIsLoading(false);
    setShowAlert(true);
    setCheckEmail(state);
  };

  const { initial, animate, transition } = FLOATING_MOTION_VALUE;

  return (
    <>
      {checkEmail === 'duplicate' && showAlert && (
        <Alert $type="top">이미 등록된 이메일입니다.</Alert>
      )}
      {checkEmail !== 'duplicate' && checkEmail !== '' && showAlert && (
        <Alert $type="top">
          인증 메일이 발송되었습니다. 이메일 인증을 완료해주세요.
        </Alert>
      )}
      <motion.div initial={initial} animate={animate} transition={transition}>
        <FormContainer>
          <HeaderLogo $width="132px" $height="72px" />
          <SignInAndUpForm
            submitHandler={submitHandler}
            option="signup"
            isLoading={isLoading}
          />
          <SignInAndUpLink moveTarget="signin" />
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
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: var(--space-sm);
  margin: auto;
  margin-top: 15vh;
`;

const url = `${import.meta.env.VITE_DB_SERVER}signup`;

export default Signup;
