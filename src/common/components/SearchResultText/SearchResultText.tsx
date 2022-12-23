import styled, { css } from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';

export interface SearchResultTextProps {
  resultCount: number;
  searchWord?: string;
}

function SearchResultText({
  resultCount,
  searchWord,
  ...props
}: SearchResultTextProps) {
  const [searchParams] = useSearchParams();
  return useMemo(
    () => (
      <SearchResultTextWrapper {...props}>
        <KeyWord>{`"${searchWord ?? searchParams.get('query')}"`}</KeyWord>
        <ResultInfo>{`검색 결과  ${resultCount} 건`}</ResultInfo>
      </SearchResultTextWrapper>
    ),
    [resultCount, searchWord]
  );
}

const fontStyle = css`
  font-weight: 700;
  font-size: var(--text-md);
`;

const SearchResultTextWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: var(--space-xs);
  max-width: 408px;
`;

const KeyWord = styled.span`
  ${fontStyle};
  color: var(--purple-900);
  max-width: 284px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ResultInfo = styled.span`
  ${fontStyle};
  color: var(--black);
`;

export default SearchResultText;
