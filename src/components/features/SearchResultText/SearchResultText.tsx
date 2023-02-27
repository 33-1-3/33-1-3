import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

export interface SearchResultTextProps {
  resultCount: number;
  searchWord?: string;
}

function SearchResultText({ resultCount, searchWord }: SearchResultTextProps) {
  const [searchParams] = useSearchParams();
  const query = searchWord || searchParams.get('query') || '';
  const formattedQuery =
    '"' + (query.length > 20 ? query.substring(0, 20) + '… ' : query) + '"';

  return useMemo(
    () => (
      <SearchResultTextWrapper>
        {/* TODO: 임시방편으로 이렇게 구현해두긴 했지만..
        빈 문자열이 검색되었을 경우 허수 검색결과가 많아서 아예 다른 뷰를 보여주는 게 나을듯.. */}
        {query ? (
          <>
            <PurpleText>{formattedQuery}</PurpleText>
            <NormalText>
              &nbsp;&nbsp;검색 결과&nbsp;&nbsp;{resultCount} 건
            </NormalText>
          </>
        ) : (
          <NormalText>전체 LP&nbsp;&nbsp;{resultCount} 건</NormalText>
        )}
      </SearchResultTextWrapper>
    ),
    [resultCount, query]
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
