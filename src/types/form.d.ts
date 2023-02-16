type formOptions = 'signin' | 'signup';

type inputOptions = 'id' | 'nickname' | 'pwd' | 'pwdCheck';

interface InputProps {
  option: inputOptions;
}

interface SignInAndUpInputProps extends InputProps {
  isValid: boolean;
  setFormState: Dispatch<SetStateAction<formStateProps>>;
  [key: string]: unknown;
}

interface SignInAndUpLinkProps {
  moveTarget: formOptions;
  [key: string]: unknown;
}

interface SignInAndUpFormProps {
  option: formOptions;
  isLoading?: boolean;
  onSubmit: FormEventHandler<HTMLFormElement>;
  [key: string]: unknown;
}

interface formStateProps {
  id: string;
  nickname: string;
  pwd: string;
  pwdCheck: string;
}
