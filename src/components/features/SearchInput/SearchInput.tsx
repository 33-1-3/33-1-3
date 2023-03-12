import { ChangeEventHandler, FormEventHandler } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { absolute } from '@/styles/mixin';

export interface SearchInputProps {
  placeholder?: string;
  ariaLabel?: string;
  inputSize?: 'small' | 'large';
  onSubmit?: FormEventHandler<HTMLFormElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  [key: string]: unknown;
}

export interface InputProps {
  inputSize: 'small' | 'large';
}

function SearchInput({
  placeholder = '가수나 음반을 검색하세요!',
  ariaLabel = '전체 음반 검색',
  inputSize = 'large',
  onSubmit,
  onChange,
  ...props
}: SearchInputProps) {
  return (
    <InputWrapper onSubmit={onSubmit} {...props}>
      <StyledInput
        type="search"
        placeholder={placeholder}
        aria-label={ariaLabel}
        inputSize={inputSize}
        onChange={onChange}
      />
      <SearchButton
        type="submit"
        inputSize={inputSize}
        whileHover={{ rotate: '30deg' }}
      ></SearchButton>
    </InputWrapper>
  );
}

const INPUT_STYLE = {
  small: css`
    width: 240px;
    height: 40px;
    padding: 10px 12px;
    border: 1px solid var(--black);
    border-radius: 20px;
    font-size: 15px;
  `,
  large: css`
    min-width: 400px;
    height: 56px;
    padding: 16px 20px;
    border: 3px solid var(--black);
    border-radius: 36px;
    font-size: 24px;
  `,
};

const BUTTON_STYLE = {
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

const InputWrapper = styled.form`
  display: inline-block;
  width: fit-content;
  position: relative;
`;

const StyledInput = styled.input<InputProps>`
  ${({ inputSize }) => INPUT_STYLE[inputSize]};
  font-weight: 400;

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }

  &::placeholder {
    color: var(--gray-300);
    font-size: inherit;
  }
`;

const SearchButton = styled(motion.button)<InputProps>`
  ${absolute({ r: 0 })};
  ${({ inputSize }) => BUTTON_STYLE[inputSize]};
  background: url('/assets/searchButton.svg') no-repeat center/contain;
  border: none;
`;

export default SearchInput;
