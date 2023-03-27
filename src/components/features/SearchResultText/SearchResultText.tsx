import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

export interface SearchResultTextProps {
  resultCount: number;
  searchWord?: string;
}

function SearchResultText({ resultCount, searchWord }: SearchResultTextProps) {
  const [searchParams] = useSearchParams();
  const queryString = searchWord || searchParams.get('query') || '';
  const formattedQueryString =
    '"' +
    (queryString.length > 20
      ? queryString.substring(0, 20) + '… '
      : queryString) +
    '"';

  return useMemo(
    () => (
      <SearchResultTextWrapper>
        <>
          <PurpleText>{formattedQueryString}</PurpleText>
          <NormalText>
            &nbsp;&nbsp;검색 결과&nbsp;&nbsp;{resultCount} 건
          </NormalText>
        </>
      </SearchResultTextWrapper>
    ),
    [resultCount, queryString]
  );
}

const SearchResultTextWrapper = styled.span`
  font-weight: 700;
  font-size: var(--text-md);
  white-space: nowrap;
`;

const PurpleText = styled.span`
  color: var(--purple-900);
`;

const NormalText = styled.span`
  color: var(--black);
`;

export default SearchResultText;
