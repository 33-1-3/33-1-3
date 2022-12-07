import styled, { css } from 'styled-components';

export interface SearchResultTextProps {
  keyword: string;
  resultCount: number;
}

function SearchResultText({ keyword, resultCount }: SearchResultTextProps) {
  return (
    <SearchResultTextWrapper>
      <KeyWord>{`"${keyword}"`}</KeyWord>
      <ResultInfo>{`검색 결과 ${resultCount}건`}</ResultInfo>
    </SearchResultTextWrapper>
  );
}

SearchResultText.defaultProps = { keyword: '검색어', resultCount: 0 };

const fontStyle = css`
  font-weight: 700;
  font-size: var(--text-md);
`;

const SearchResultTextWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: var(--space-xs);
`;

const KeyWord = styled.span`
  ${fontStyle};
  color: var(--purple-900);
`;

const ResultInfo = styled.span`
  ${fontStyle};
  color: var(--black);
`;

export default SearchResultText;
