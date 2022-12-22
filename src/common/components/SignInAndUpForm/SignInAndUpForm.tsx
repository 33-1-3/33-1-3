import { useState } from 'react';
import styled from 'styled-components';
import SqaureButton from '../SquareButton/SquareButton';
import SignInAndUpInput from '../SignInAndUpInput/SignInAndUpInput';

const validateRgx = {
  id: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  nickname: /^[A-Za-z0-9ㄱ-ㅎㅏ-ㅣ가-힣_-]{2,10}$/,
  pwd: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/,
};

const Form = styled.form`
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
  margin-bottom: 12px;
`;

export interface SignInAndUpFormProps {
  submitHandler: React.FormEventHandler<HTMLFormElement>;
  option: 'signin' | 'signup';
}

export interface formState {
  id: string;
  nickname: string;
  pwd: string;
  pwdCheck: string;
}

const SignInAndUpForm = ({
  submitHandler,
  option,
  ...props
}: SignInAndUpFormProps) => {
  const [formState, setFormState] = useState<formState>({
    id: '',
    nickname: '',
    pwd: '',
    pwdCheck: '',
  });

  const IS_VALID = {
    id: formState.id === '' || validateRgx.id.test(formState.id),
    nickname:
      formState.nickname === '' ||
      validateRgx.nickname.test(formState.nickname),
    pwd: formState.pwd === '' || validateRgx.pwd.test(formState.pwd),
    pwdCheck: formState.pwdCheck === '' || formState.pwd === formState.pwdCheck,
  };

  return (
    <Form onSubmit={submitHandler} {...props}>
      <InputSet>
        {option === 'signin' && (
          <>
            {(['id', 'pwd'] as Array<keyof formState>).map((option, idx) => (
              <SignInAndUpInput
                key={idx}
                option={option}
                isValid={IS_VALID[option]}
                setFormState={setFormState}
              />
            ))}
          </>
        )}
        {option === 'signup' && (
          <>
            {(
              ['id', 'nickname', 'pwd', 'pwdCheck'] as Array<keyof formState>
            ).map((option, idx) => (
              <SignInAndUpInput
                key={idx}
                option={option}
                isValid={IS_VALID[option]}
                setFormState={setFormState}
              />
            ))}
          </>
        )}
      </InputSet>
      <SubmitBtn
        type="submit"
        fontSize={20}
        size="small"
        isFilled={true}
        disabled={
          (option === 'signin' &&
            (formState.id === '' ||
              formState.pwd === '' ||
              !IS_VALID.id ||
              !IS_VALID.pwd)) ||
          (option === 'signup' &&
            (formState.id === '' ||
              formState.nickname === '' ||
              formState.pwd === '' ||
              formState.pwdCheck === '' ||
              !IS_VALID.id ||
              !IS_VALID.nickname ||
              !IS_VALID.pwd ||
              !IS_VALID.pwdCheck))
        }
      >
        {option === 'signin' ? 'Sign In' : 'Sign Up'}
      </SubmitBtn>
    </Form>
  );
};

export default SignInAndUpForm;
