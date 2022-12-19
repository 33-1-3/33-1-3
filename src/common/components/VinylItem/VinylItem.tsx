import { AlbumInfo, LPCover } from '@/common/components';
import { ProcessedResult } from '@/types/data';
import { ResultViewProps } from '../AlbumInfo/AlbumInfo';
import styled, { css } from 'styled-components';
import { useMemo, memo } from 'react';

export interface VinylItemProps {
  searchResult: ProcessedResult;
  page: 'all' | 'collection';
  view: 'block' | 'list' | 'detail' | 'myitem';
}

function VinylItem({ searchResult, page, view, ...props }: VinylItemProps) {
  const vinylSize = useMemo(
    () => (view === 'detail' ? 'large' : 'small'),
    [view]
  );
  const isHover = useMemo(() => view !== 'detail', [view]);

  return useMemo(
    () => (
      <VinylItemWrapper view={view} {...props}>
        <LPCover
          searchResult={searchResult}
          size={vinylSize}
          hoverInteraction={isHover}
        />
        <AlbumInfo searchResult={searchResult} page={page} view={view} />
      </VinylItemWrapper>
    ),
    [searchResult, page, view]
  );
}

const WRAPPER_STYLE = {
  block: css`
    display: flex;
    flex-flow: column wrap;
    width: 150px;
  `,
  list: css`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    gap: 60px;
    min-width: 680px;
  `,
  detail: css`
    display: flex;
    flex-flow: column wrap;
    width: 394px;
  `,
  myitem: css``,
};

const VinylItemWrapper = styled.article<ResultViewProps>`
  ${({ view }) => WRAPPER_STYLE[view]}
`;

export default memo(VinylItem);
