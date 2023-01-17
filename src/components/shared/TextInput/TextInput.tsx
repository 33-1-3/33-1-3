import styled from 'styled-components';
import uuid from 'react-uuid';
import { memo, useState } from 'react';

export interface TextInputProps extends InputProps {
  width: number;
  label?: string;
  placeholder: string;
  required: boolean;
  validationTester: RegExp;
  errorMsg: string;
  value?: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

export interface InputProps {
  height: number;
  color: string;
  borderColor: string;
}

const validateTest = (
  e: React.ChangeEvent<HTMLInputElement>,
  validationTester: RegExp
) => {
  // TODO: nextElementSibling 대신 다른 좋은 방법은?
  e.target.nextElementSibling?.classList.toggle(
    'show',
    e.target.value !== '' && !validationTester.test(e.target.value)
  );
};

function TextInput({
  width,
  height,
  color,
  borderColor,
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
        autoComplete="off"
        autoFocus={true}
        height={height}
        style={{ width, height }}
        color={color}
        borderColor={borderColor}
        value={inputValue}
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
  errorMsg: '생성할 콜렉션의 이름을 입력해주세요.',
  color: 'var(--gray-200)',
  borderColor: 'var(--black)',
};

const Label = styled.label`
  display: block;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 4px;
`;

const Input = styled.input<InputProps>`
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  line-height: ${({ height }) => height}px;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 4px;

  &::placeholder {
    color: ${({ color }) => color};
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
