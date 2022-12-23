import { useState } from 'react';
import styled from 'styled-components';
import SqaureButton from '../SquareButton/SquareButton';
import SignInAndUpInput from '../SignInAndUpInput/SignInAndUpInput';

const validateRgx = {
  id: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  nickname: /^[A-Za-z0-9ㄱ-ㅎㅏ-ㅣ가-힣_-]{2,10}$/,
  pwd: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d~!@#$%^&*()\-_=+|<>?:;{}'",./]{6,12}$/,
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

const LoadingWrapper = styled.div`
  background-color: 'var(--purple-900)';
  width: '106.48px';
  height: '46px';
  border-radius: '6px';
  margin: '0 auto';
  margin-bottom: '15px';
`;

const LoadingBtn = styled.div`
  & {
    color: #ffffff;
    font-size: 3px;
    margin: 50px auto;
    top: 20px;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    text-indent: -9999em;
    -webkit-animation: load4 1.3s infinite linear;
    animation: load4 1.3s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  @-webkit-keyframes load4 {
    0%,
    100% {
      box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
    }
    12.5% {
      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    25% {
      box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    37.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
        0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    50% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
        0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    62.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
    }
    75% {
      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em,
        2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em,
        -2em -2em 0 0;
    }
    87.5% {
      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
    }
  }
  @keyframes load4 {
    0%,
    100% {
      box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
    }
    12.5% {
      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    25% {
      box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    37.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
        0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    50% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
        0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    62.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
    }
    75% {
      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em,
        2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em,
        -2em -2em 0 0;
    }
    87.5% {
      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
    }
  }
`;

export interface SignInAndUpFormProps {
  submitHandler: React.FormEventHandler<HTMLFormElement>;
  option: 'signin' | 'signup';
  isLoading: boolean;
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
  isLoading,
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
      {isLoading ? (
        <LoadingWrapper
          style={{
            backgroundColor: 'var(--purple-900)',
            width: '106.48px',
            height: '46px',
            borderRadius: '6px',
            margin: '0 auto',
            marginBottom: '15px',
          }}
        >
          <LoadingBtn className="loader" />
        </LoadingWrapper>
      ) : (
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
      )}
    </Form>
  );
};

SignInAndUpForm.defaultProps = {
  isLoading: false,
};

export default SignInAndUpForm;
