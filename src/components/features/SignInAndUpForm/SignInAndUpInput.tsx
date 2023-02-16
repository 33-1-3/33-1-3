import { useCallback, ChangeEvent } from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';
import { absolute } from '@/styles/mixin';
import { INPUT_INFO } from '@/utils/constants/signInAndUp';

function SignInAndUpInput({
  option,
  isValid,
  setFormState,
  ...props
}: SignInAndUpInputProps) {
  const newId = uuid();
  const { inputType, label, placeholder, errorMsg } = INPUT_INFO[option];

  const updateFormState = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setFormState((formState: formStateProps) => ({
        ...formState,
        [option]: e.target.value,
      }));
    },
    [option, setFormState]
  );

  return (
    <Wrapper>
      <label className="srOnly" htmlFor={newId}>
        {label}
      </label>
      <Input
        option={option}
        type={inputType}
        id={newId}
        placeholder={placeholder}
        required={true}
        onInput={updateFormState}
        {...props}
      />
      {!isValid && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

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
  background: ${({ option }) =>
    `var(--space-sm) url('/assets/${option}.svg') no-repeat`};
  &::placeholder {
    color: var(--gray-200);
  }
`;

const ErrorMsg = styled.span`
  ${absolute({ t: 42, l: 12 })}
  display: block;
  font-size: 12px;
  color: var(--red);
`;

export default SignInAndUpInput;
