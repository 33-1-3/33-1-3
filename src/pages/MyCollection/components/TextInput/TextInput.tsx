import styled from 'styled-components';

const Label = styled.label`
  display: block;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 4px;
`;

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
  label?: string;
  placeholder?: string;
  required?: boolean;
  validationTester?: RegExp;
  errorMsg?: string;
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
}: TextInputProps) => (
  <>
    {label && <Label htmlFor="textInput">{label}</Label>}
    <Input
      type="text"
      id="textInput"
      name={label}
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
