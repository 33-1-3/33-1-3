type formOptions = 'signin' | 'signup';

type inputOptions = 'id' | 'nickname' | 'pwd' | 'pwdCheck';

interface FormStateProps {
  id: string;
  nickname: string;
  pwd: string;
  pwdCheck: string;
}
