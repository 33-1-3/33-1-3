import { useMemo, memo } from 'react';
import styled, { css } from 'styled-components';
import { AlbumInfo, LPCover } from '@/components';
import { ProcessedResult } from '@/types/data';
import { PageProps, ViewProps } from '@/types/render';

export interface VinylItemProps extends ViewProps, PageProps {
  searchResult: ProcessedResult;
  [props: string]: unknown;
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

const VinylItemWrapper = styled.article<ViewProps>`
  ${({ view }) => WRAPPER_STYLE[view]}
`;

export default memo(VinylItem);
