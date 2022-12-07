import styled from 'styled-components';

export interface SearchInputProps {
  placeholder: string;
  page: '전체' | '리스트';
  width: number;
}

export interface InputProps {
  inputStyles: {
    width: number;
    height: number;
    border: number;
    radius: number;
    paddingColumn: number;
    paddingRow: number;
    placeholderSize: number;
  };
}

export interface SearchButtonProps {
  buttonStyles: {
    size: number;
    top: number;
    margin: number;
  };
}

function SearchInput({ placeholder, page, width }: SearchInputProps) {
  const inputStyles = {
    width: width,
    height: Math.floor(width * 0.14),
    border: Math.floor(width * 0.0066),
    radius: Math.floor(width * 0.66),
    paddingColumn: Math.floor(width * 0.033),
    paddingRow: Math.floor(width * 0.04),
    placeholderSize: Math.floor(width * 0.053),
  };
  const buttonStyles = {
    size: Math.floor(width * 0.093),
    top: width * 0.0066 - 1,
    margin: Math.floor(width * 0.02),
  };

  return (
    <InputWrapper>
      <Input
        type="search"
        placeholder={placeholder}
        aria-label={`${page} 검색 창`}
        inputStyles={inputStyles}
      />
      <SearchButton type="submit" buttonStyles={buttonStyles}></SearchButton>
    </InputWrapper>
  );
}

const InputWrapper = styled.form`
  display: inline-block;
  position: relative;
`;

const Input = styled.input<InputProps>`
  width: ${({ inputStyles }) => inputStyles.width}px;
  height: ${({ inputStyles }) => inputStyles.height}px;
  padding: ${({ inputStyles }) => inputStyles.paddingColumn}px
    ${({ inputStyles }) => inputStyles.paddingRow}px;
  border: ${({ inputStyles }) => inputStyles.border}px solid black;
  border-radius: ${({ inputStyles }) => inputStyles.radius}px;
  font-family: 'LINESeed';
  font-size: ${({ inputStyles }) => inputStyles.placeholderSize}px;

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }

  &::placeholder {
    font-size: ${({ inputStyles }) => inputStyles.placeholderSize}px;
    color: var(--black);
  }
`;

const SearchButton = styled.button<SearchButtonProps>`
  position: absolute;
  top: ${({ buttonStyles }) => buttonStyles.top}px;
  right: 0;
  width: ${({ buttonStyles }) => buttonStyles.size}px;
  height: ${({ buttonStyles }) => buttonStyles.size}px;
  margin: ${({ buttonStyles }) => buttonStyles.margin}px;
  background: url('/assets/searchButton.svg') no-repeat center/contain;
  border: none;
`;

export default SearchInput;
