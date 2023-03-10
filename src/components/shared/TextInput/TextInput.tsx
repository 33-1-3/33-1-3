import { useState, memo, KeyboardEventHandler, ChangeEvent } from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';
import lengthToPxStr from '@/utils/functions/lengthToPxStr';
import { widthHeight } from '@/types/style';

export interface TextInputProps extends widthHeight {
  label?: string;
  placeholder?: string;
  required?: boolean;
  validationTester?: RegExp;
  errorMsg?: string;
  value?: string;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  [key: string]: unknown;
}

function TextInput({
  $width,
  $height,
  label,
  placeholder = '',
  required = false,
  validationTester,
  errorMsg,
  value = '',
  onKeyDown,
  ...props
}: TextInputProps) {
  const newId = uuid();
  const [inputValue, setInputValue] = useState(value);
  const isValid = inputValue === '' || (validationTester && validationTester.test(inputValue.trim()));

  return (
    <>
      {label?.trim() && <Label htmlFor={newId}>{label}</Label>}
      <StyledInput
        type="text"
        id={newId}
        name={label}
        placeholder={placeholder}
        required={required}
        value={inputValue}
        autoComplete="off"
        autoFocus={true}
        $width={$width}
        $height={$height}
        onKeyDown={onKeyDown}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
        {...props}
      />
      <ErrorMsg>{(errorMsg && !isVaild) ? errorMsg : ''}</ErrorMsg>
    </>
  );
}

const Label = styled.label`
  display: block;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 4px;
`;

const StyledInput = styled.input<TextInputProps>`
  width: ${({ $width }) => lengthToPxStr($width)};
  height: ${({ $height }) => lengthToPxStr($height)};
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  line-height: ${({ $height }) => lengthToPxStr($height)};
  border: 1px solid var(--black);
  border-radius: 4px;

  &::placeholder {
    color: var(--gray-200);
  }
`;

const ErrorMsg = styled.span`
  display: block;
  height: 16px;
  margin: 4px 10px;
  font-size: 14px;
  color: var(--red);
`;

export default memo(TextInput);
