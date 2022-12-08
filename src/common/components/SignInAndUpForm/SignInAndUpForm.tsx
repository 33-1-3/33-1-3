import { useState } from 'react';
import styled from 'styled-components';
import SqaureButton from '../SquareButton/SquareButton';
import SignInAndUpInput from '../SignInAndUpInput/SignInAndUpInput';

const validateRgx = {
  id: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  nickname: /^[A-Za-z0-9ㄱ-ㅎㅏ-ㅣ가-힣_-]{2,10}$/,
  pwd: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/,
};

const Form = styled.div`
  width: min-content;
  text-align: center;
`;

const InputSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const SubmitBtn = styled(SqaureButton)`
  margin-top: 50px;
`;

export interface SignInAndUpFormProps {
  option: 'signin' | 'signup';
}

export interface formState {
  id: string;
  nickname: string;
  pwd: string;
  pwdCheck: string;
}

const SignInAndUpForm = ({ option, ...props }: SignInAndUpFormProps) => {
  const [formState, setFormState] = useState<formState>({
    id: '',
    nickname: '',
    pwd: '',
    pwdCheck: '',
  });

  const isValid = {
    id: formState.id === '' || validateRgx.id.test(formState.id),
    nickname:
      formState.nickname === '' ||
      validateRgx.nickname.test(formState.nickname),
    pwd: formState.pwd === '' || validateRgx.pwd.test(formState.pwd),
    pwdCheck: formState.pwdCheck === '' || formState.pwd === formState.pwdCheck,
  };

  console.log(formState);

  return (
    <Form {...props}>
      <InputSet>
        {option === 'signin' && (
          <>
            <SignInAndUpInput
              option="id"
              isValid={isValid.id}
              setFormState={setFormState}
            />
            <SignInAndUpInput
              option="pwd"
              isValid={isValid.pwd}
              setFormState={setFormState}
            />
          </>
        )}
        {option === 'signup' && (
          <>
            <SignInAndUpInput
              option="id"
              isValid={isValid.id}
              setFormState={setFormState}
            />
            <SignInAndUpInput
              option="nickname"
              isValid={isValid.nickname}
              setFormState={setFormState}
            />
            <SignInAndUpInput
              option="pwd"
              isValid={isValid.pwd}
              setFormState={setFormState}
            />
            <SignInAndUpInput
              option="pwdCheck"
              isValid={isValid.pwdCheck}
              setFormState={setFormState}
            />
          </>
        )}
      </InputSet>
      <SubmitBtn
        fontSize="20px"
        isBig={false}
        isFilled={true}
        disabled={
          formState.id === '' ||
          formState.nickname === '' ||
          formState.pwd === '' ||
          formState.pwdCheck === '' ||
          !isValid.id ||
          !isValid.nickname ||
          !isValid.pwd ||
          !isValid.pwdCheck
        }
      >
        {option === 'signin' ? 'Sign In' : 'Sign Up'}
      </SubmitBtn>
      {/* <MoveFormLink moveTarget={option === 'signin' ? 'signup' : 'signin'} /> */}
    </Form>
  );
};

export default SignInAndUpForm;
