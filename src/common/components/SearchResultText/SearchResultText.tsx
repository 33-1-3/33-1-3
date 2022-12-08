import styled, { css } from 'styled-components';
import { useSearchParams } from 'react-router-dom';

export interface SearchResultTextProps {
  resultCount: number;
}

function SearchResultText({ resultCount, ...props }: SearchResultTextProps) {
  const [searchParams] = useSearchParams();

  return (
    <SearchResultTextWrapper {...props}>
      <KeyWord>{`"${searchParams.get('query')}"`}</KeyWord>
      <ResultInfo>{`검색 결과 ${resultCount}건`}</ResultInfo>
    </SearchResultTextWrapper>
  );
}

SearchResultText.defaultProps = { resultCount: 0 };

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
