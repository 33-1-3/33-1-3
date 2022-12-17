import uuid from 'react-uuid';
import VinylItem from '../VinylItem/VinylItem';
import { ResultViewProps } from '../AlbumInfo/AlbumInfo';
import { ProcessedResult } from '@/types/data';
import styled, { css } from 'styled-components';
import { memo } from 'react';

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
    display: grid;
    grid-template-columns: repeat(4, 150px);
    justify-content: center;
    column-gap: 76px;

    @media screen and (max-width: 1100px) {
      grid-template-columns: repeat(3, 150px);
    }
  `,
  list: css`
    flex-flow: column wrap;
    justify-content: center;
    row-gap: 60px;
  `,
  detail: css`
    display: none;
  `,
  myitem: css``,
};

const VinylItemsWrapper = styled.section<ResultViewProps>`
  display: flex;
  min-width: 680px;
  max-width: 828px;
  margin: 0 auto;
  margin-top: 52px;
  ${({ view }) => WRAPPER_STYLE[view]};
`;

export default memo(VinylItems);
