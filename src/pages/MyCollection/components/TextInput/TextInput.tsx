import styled from 'styled-components';
import uuid from 'react-uuid';

const Label = styled.label`
  display: block;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 4px;
`;

const Input = styled.input<{ height: number }>`
  padding-left: 10px;
  padding-right: 10px;
  font-size: 12px;
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

export interface TextInputProps {
  width: number;
  height: number;
  label: string;
  placeholder: string;
  required: boolean;
  validationTester: RegExp;
  errorMsg: string;
}

const TextInput = ({
  width,
  height,
  label,
  placeholder,
  required,
  validationTester,
  errorMsg,
  ...props
}: TextInputProps) => {
  const newId = uuid();
  return (
    <>
      {label.trim() && <Label htmlFor={newId}>{label}</Label>}
      <Input
        type="text"
        id={newId}
        name={label}
        placeholder={placeholder}
        required={required}
        height={height}
        style={{ width: `${width}px`, height: `${height}px` }}
        onInput={
          validationTester &&
          ((e: React.ChangeEvent<HTMLInputElement>) =>
            validateTest(e, validationTester))
        }
        {...props}
      />
      {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </>
  );
};

export default TextInput;
