import { useState, FormEventHandler } from 'react';
import SignInAndUpInput from './SignInAndUpInput';
import Spinner from './Spinner';
import { SquareButton } from '@/components';
import styled from 'styled-components';
import { flexContainer } from '@/styles/mixin';
import {
  BUTTON_INFO,
  INPUT_SET,
  VALIDATE_REGEXP,
} from '@/utils/constants/signInAndUp';

interface SignInAndUpFormProps {
  option: formOptions;
  isLoading?: boolean;
  onSubmit: FormEventHandler<HTMLFormElement>;
  [key: string]: unknown;
}

function SignInAndUpForm({
  option,
  isLoading = false,
  onSubmit,
  ...props
}: SignInAndUpFormProps) {
  const [formState, setFormState] = useState<FormStateProps>({
    id: '',
    nickname: '',
    pwd: '',
    pwdCheck: '',
  });

  const IS_VALID = {
    id: formState.id === '' || VALIDATE_REGEXP.id.test(formState.id),
    nickname:
      formState.nickname === '' ||
      VALIDATE_REGEXP.nickname.test(formState.nickname),
    pwd: formState.pwd === '' || VALIDATE_REGEXP.pwd.test(formState.pwd),
    pwdCheck: formState.pwdCheck === '' || formState.pwd === formState.pwdCheck,
  };

  const disabled = INPUT_SET[option].reduce((prev, acc) => {
    return prev || formState[acc] === '' || !IS_VALID[acc];
  }, false);

  return (
    <StyledForm onSubmit={onSubmit} {...props}>
      <InputSet>
        {INPUT_SET[option].map((option, idx) => (
          <SignInAndUpInput
            key={idx}
            option={option}
            isValid={IS_VALID[option]}
            setFormState={setFormState}
          />
        ))}
      </InputSet>
      {isLoading ? (
        <Spinner />
      ) : (
        <SubmitBtn
          type="submit"
          fontSize={20}
          size="small"
          isFilled={true}
          disabled={disabled}
        >
          {BUTTON_INFO[option]}
        </SubmitBtn>
      )}
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: min-content;
  text-align: center;
`;

const InputSet = styled.div`
  ${flexContainer({ d: 'column', g: '28px' })};
`;

const SubmitBtn = styled(SquareButton)`
  margin-top: 50px;
  margin-bottom: 12px;
`;

export default SignInAndUpForm;
