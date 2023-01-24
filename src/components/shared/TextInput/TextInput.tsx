import { useState, memo } from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';

export interface TextInputProps {
  width: number | string;
  height: number | string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  validationTester?: RegExp;
  errorMsg?: string;
  value?: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  [key: string]: unknown;
}

const validateTest = (
  e: React.ChangeEvent<HTMLInputElement>,
  regex: RegExp
) => {
  // TODO: nextElementSibling 대신 다른 좋은 방법은?
  e.target.nextElementSibling?.classList.toggle(
    'show',
    e.target.value !== '' && !regex.test(e.target.value.trim())
  );
};

function TextInput({
  width,
  height,
  label,
  placeholder,
  required,
  validationTester,
  errorMsg,
  value,
  onKeyDown,
  ...props
}: TextInputProps) {
  const newId = uuid();
  const [inputValue, setInputValue] = useState(value);
  return (
    <>
      {label && label.trim() && <Label htmlFor={newId}>{label}</Label>}
      <Input
        type="text"
        id={newId}
        name={label}
        placeholder={placeholder}
        required={required}
        value={inputValue}
        autoComplete="off"
        autoFocus={true}
        style={{ width, height }}
        onKeyDown={onKeyDown}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(e.target.value);
          validationTester && validateTest(e, validationTester);
        }}
        {...props}
      />
      {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </>
  );
}

TextInput.defaultProps = {
  placeholder: '',
  required: false,
};

const Label = styled.label`
  display: block;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 4px;
`;

const Input = styled.input<TextInputProps>`
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  line-height: ${({ height }) => height}px;
  border: 1px solid var(--black);
  border-radius: 4px;

  &::placeholder {
    color: var(--gray-200);
  }
`;

const ErrorMsg = styled.span`
  display: none;
  margin-top: 4px;
  margin-left: 10px;
  font-size: 12px;
  color: var(--red);

  &.show {
    display: block;
  }
`;

export default memo(TextInput);
