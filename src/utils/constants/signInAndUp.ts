export const BUTTON_INFO = {
  signin: 'Sign In',
  signup: 'Sign Up',
};

export const LINK_INFO = {
  signin: {
    help: '이미 회원이라면?',
    target: '로그인!',
  },
  signup: {
    help: '아직 회원이 아니라면?',
    target: '가입하기!',
  },
};

export const INPUT_INFO = {
  id: {
    inputType: 'email',
    label: '아이디',
    placeholder: '아이디를 입력해주세요.',
    errorMsg: '이메일 형식이어야 합니다.',
  },
  nickname: {
    inputType: 'text',
    label: '닉네임',
    placeholder: '닉네임을 입력해주세요.',
    errorMsg: '영문, 한글, 숫자, _, -만 허용하며 2~10자여야 합니다.',
  },
  pwd: {
    inputType: 'password',
    label: '비밀번호',
    placeholder: '비밀번호를 입력해주세요.',
    errorMsg: '영문, 숫자, 특수문자를 조합하여 6~12자여야 합니다.',
  },
  pwdCheck: {
    inputType: 'password',
    label: '비밀번호 확인',
    placeholder: '비밀번호를 다시 입력해주세요.',
    errorMsg: '비밀번호가 일치하지 않습니다.',
  },
};

export const INPUT_SET: { [key: string]: inputOptions[] } = {
  signin: ['id', 'pwd'],
  signup: ['id', 'nickname', 'pwd', 'pwdCheck'],
};

export const VALIDATE_REGEXP = {
  id: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  nickname: /^[A-Za-z0-9ㄱ-ㅎㅏ-ㅣ가-힣_-]{2,10}$/,
  pwd: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d~!@#$%^&*()\-_=+|<>?:;{}'",./]{6,12}$/,
};
