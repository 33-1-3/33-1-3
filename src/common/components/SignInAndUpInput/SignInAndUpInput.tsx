import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';

import { formState } from '../SignInAndUpForm/SignInAndUpForm';

const optionInfo = {
  id: {
    inputType: 'email',
    label: '아이디',
    placeholder: '아이디를 입력해주세요.',
    errorMsg: '이메일 형식이어야 합니다.',
  },
  nickname: {
    inputType: 'text',
    label: '닉네임',
    placeholder: '닉네임을 입력해주세요.',
    errorMsg: '영문, 한글, 숫자, _, -만 허용하며 2~10자여야 합니다.',
  },
  pwd: {
    inputType: 'password',
    label: '비밀번호',
    placeholder: '비밀번호를 입력해주세요.',
    errorMsg: '영문, 숫자를 조합하여 6~12자여야 합니다.',
  },
  pwdCheck: {
    inputType: 'password',
    label: '비밀번호 확인',
    placeholder: '비밀번호를 다시 입력해주세요.',
    errorMsg: '비밀번호가 일치하지 않습니다.',
  },
};

const Wrapper = styled.div`
  position: relative;
`;

export interface InputProps {
  option: 'id' | 'nickname' | 'pwd' | 'pwdCheck';
}

const Input = styled.input<InputProps>`
  display: block;
  width: 280px;
  height: 36px;
  padding-left: 36px;
  padding-right: 10px;
  font-size: 12px;
  line-height: 280px;
  border: 1px solid var(--black);
  border-radius: 100px;

  &::placeholder {
    color: var(--gray-200);
  }

  background: ${({ option }) =>
    `var(--space-sm) url('/assets/${option}.svg') no-repeat`};
`;

const ErrorMsg = styled.span`
  display: block;
  position: absolute;
  top: 42px;
  left: 12px;
  font-size: 12px;
  color: var(--red);
`;

export interface SignInAndUpInputProps extends InputProps {
  isValid: boolean;
  setFormState: Dispatch<SetStateAction<formState>>;
}

const SignInAndUpInput = ({
  option,
  isValid,
  setFormState,
  ...props
}: SignInAndUpInputProps) => {
  const newId = uuid();
  const { inputType, label, placeholder, errorMsg } = optionInfo[option];
  return (
    <Wrapper>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="srOnly" htmlFor={newId}>
        {label}
      </label>
      <Input
        option={option}
        type={inputType}
        id={newId}
        placeholder={placeholder}
        required={true}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
          setFormState((inputState) => ({
            ...inputState,
            [option]: e.target.value,
          }));
        }}
        {...props}
      />
      {!isValid && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </Wrapper>
  );
};

export default SignInAndUpInput;
