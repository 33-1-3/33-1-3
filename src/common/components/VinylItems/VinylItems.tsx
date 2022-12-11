import uuid from 'react-uuid';
import VinylItem from '../VinylItem/VinylItem';
import { ResultViewProps } from '../AlbumInfo/AlbumInfo';
import { ProcessedResult } from '@/types/data';
import styled, { css } from 'styled-components';

export interface VinylItemsProps extends ResultViewProps {
  searchResult: ProcessedResult[];
  page: 'all' | 'collection';
}

function VinylItems({ searchResult, page, view, ...props }: VinylItemsProps) {
  return (
    <VinylItemsWrapper view={view} {...props}>
      {searchResult.map((result) => (
        <VinylItem key={uuid()} searchResult={result} page={page} view={view} />
      ))}
    </VinylItemsWrapper>
  );
}

const WRAPPER_STYLE = {
  block: css`
    flex-flow: row wrap;
    justify-content: flex-start;
    column-gap: 76px;
    row-gap: 12px;
  `,
  list: css`
    flex-flow: column wrap;
    row-gap: 60px;
  `,
  detail: css`
    display: none;
  `,
};

const VinylItemsWrapper = styled.section<ResultViewProps>`
  display: flex;
  width: 828px;
  margin: 0 auto;
  margin-top: 52px;
  ${({ view }) => WRAPPER_STYLE[view]};
`;

export default VinylItems;
