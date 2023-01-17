import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { ComponentProps } from 'react';

const FONT_SIZE = { small: '15px', large: '24px' };

export interface SearchInputProps extends InputProps {
  placeholder?: string;
  page?: '전체' | '나의 콜렉션';
  handleSubmit?: ComponentProps<'form'>['onSubmit'];
  handleChange?: ComponentProps<'input'>['onChange'];
}

export interface InputProps {
  inputSize: 'small' | 'large';
}

function SearchInput({
  placeholder,
  page,
  inputSize,
  handleSubmit,
  handleChange,
  ...props
}: SearchInputProps) {
  return (
    <InputWrapper onSubmit={handleSubmit} {...props}>
      <Input
        type="search"
        placeholder={placeholder}
        aria-label={`${page} 검색 창`}
        inputSize={inputSize}
        onChange={handleChange}
      />
      <SearchButton
        type="submit"
        inputSize={inputSize}
        whileHover={{ rotate: '30deg' }}
      ></SearchButton>
    </InputWrapper>
  );
}

SearchInput.defaultProps = {
  placeholder: '검색어를 입력하세요.',
  page: '전체',
  inputSize: 'large',
};

const inputMixin = {
  small: css`
    width: 240px;
    height: 40px;
    padding: 10px 12px;
    border: 1px solid var(--black);
    border-radius: 20px;
  `,
  large: css`
    min-width: 400px;
    height: 56px;
    padding: 16px 20px;
    border: 3px solid var(--black);
    border-radius: 36px;
  `,
};

const buttonMixin = {
  small: css`
    width: 28px;
    height: 28px;
    margin: 6px;
  `,
  large: css`
    width: 36px;
    height: 36px;
    margin: 10px;
  `,
};

// const responsiveMixin = {
//   input: css`
//     @media screen and (max-width: 768px) {
//       width: 52vw;
//       height: 7.3vw;
//       padding: 2vw 2.6vw;
//       border: 0.4vw solid var(--black);
//       border-radius: 4.7vw;
//       font-size: 3.1vw;

//       &::placeholder {
//         font-size: 3.1vw;
//       }
//     }
//   `,
//   button: css`
//     @media screen and (max-width: 768px) {
//       width: 4.7vw;
//       height: 4.7vw;
//       margin: 1.3vw;
//     }
//   `,
// };

const InputWrapper = styled.form`
  display: inline-block;
  position: relative;
`;

const Input = styled.input<InputProps>`
  ${({ inputSize }) => inputMixin[inputSize]};
  font-weight: 400;
  font-size: ${({ inputSize }) => FONT_SIZE[inputSize]};

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }

  &::placeholder {
    font-size: ${({ inputSize }) => FONT_SIZE[inputSize]};
    color: var(--black);
  }
`;

const SearchButton = styled(motion.button)<InputProps>`
  position: absolute;
  right: 0;
  ${({ inputSize }) => buttonMixin[inputSize]}
  background: url('/assets/searchButton.svg') no-repeat center/contain;
  border: none;
`;

export default SearchInput;
