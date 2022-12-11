import styled from 'styled-components';
import uuid from 'react-uuid';

export interface TextInputProps {
  width: number;
  height: number;
  color: string;
  borderColor: string;
  label?: string;
  placeholder: string;
  required: boolean;
  validationTester: RegExp;
  errorMsg: string;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
}

export interface InputProps {
  height: number;
  color: string;
  borderColor: string;
}

const Label = styled.label`
  display: block;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 4px;
`;

const Input = styled.input<InputProps>`
  padding-left: 10px;
  padding-right: 10px;
  font-size: 12px;
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

const TextInput = ({
  width,
  height,
  color,
  borderColor,
  label,
  placeholder,
  required,
  validationTester,
  errorMsg,
  onKeyUp,
  ...props
}: TextInputProps) => {
  const newId = uuid();
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
        style={{ width: `${width}px`, height: `${height}px` }}
        color={color}
        borderColor={borderColor}
        onKeyUp={onKeyUp}
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

TextInput.defaultProps = {
  placeholder: '',
  required: false,
  errorMsg: '생성할 콜렉션의 이름을 입력해주세요.',
  color: 'var(--gray-200)',
  borderColor: 'var(--black)',
};

export default TextInput;
