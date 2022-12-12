import styled, { css } from 'styled-components';
import useHandleSubmit from '@/hooks/useHandleSubmit';
import { ComponentProps } from 'react';

const fontSize = { small: '15px', large: '28px' };

export interface SearchInputProps {
  placeholder: string;
  page: '전체' | '리스트';
  size: 'small' | 'large';
}

export interface formProps {
  formSize: 'small' | 'large';
}

function SearchInput({
  placeholder,
  page,
  size,
  handleChange,
  ...props
}: SearchInputProps) {
  return (
    <InputWrapper
      onSubmit={handleChange ? undefined : useHandleSubmit()}
      {...props}
    >
      <Input
        type="search"
        placeholder={placeholder}
        aria-label={`${page} 검색 창`}
        formSize={size}
        onChange={handleChange}
      />
      <SearchButton type="submit" formSize={size}></SearchButton>
    </InputWrapper>
  );
}

SearchInput.defaultProps = {
  placeholder: '검색어를 입력하세요.',
  page: '전체',
  size: 'large',
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
    width: 516px;
    height: 72px;
    padding: 22px 24px;
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
    width: 48px;
    height: 48px;
    margin: 12px;
  `,
};

export interface SearchInputProps {
  placeholder: string;
  page: '전체' | '리스트';
  size: 'small' | 'large';
  handleSubmit?: ComponentProps<'form'>['onSubmit'];
  handleChange?: ComponentProps<'input'>['onChange'];
}

export interface formProps {
  formSize: 'small' | 'large';
}

SearchInput.defaultProps = {
  placeholder: '검색어를 입력하세요.',
  page: '전체',
  size: 'large',
};

const InputWrapper = styled.form`
  display: inline-block;
  position: relative;
`;

const Input = styled.input<formProps>`
  ${({ formSize }) => inputMixin[formSize]};
  font-family: 'LINESeed';
  font-weight: 400;
  font-size: ${({ formSize }) => fontSize[formSize]};

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }

  &::placeholder {
    font-size: ${({ formSize }) => fontSize[formSize]};
    color: var(--black);
  }
`;

const SearchButton = styled.button<formProps>`
  position: absolute;
  right: 0;
  ${({ formSize }) => buttonMixin[formSize]}
  background: url('/assets/searchButton.svg') no-repeat center/contain;
  border: none;
`;

export default SearchInput;
