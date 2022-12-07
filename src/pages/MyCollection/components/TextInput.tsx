import styled from 'styled-components';

const Input = styled.input`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 12px;
  line-height: ${(props) => props.height}px;
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
  e.target.nextElementSibling?.classList.toggle(
    'show',
    e.target.value !== '' && !validationTester.test(e.target.value)
  );
};

export interface TextInputProps {
  width: number;
  height: number;
  placeholder?: string;
  required?: boolean;
  validationTester?: RegExp;
  errorMsg?: string;
}

const TextInput = ({
  width,
  height,
  placeholder,
  required,
  validationTester,
  errorMsg,
  ...props
}: TextInputProps) => (
  <>
    <Input
      type="text"
      width={width}
      height={height}
      placeholder={placeholder}
      required={required}
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

TextInput.defaultProps = {
  placeholder: '',
  required: false,
};

export default TextInput;
