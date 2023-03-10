import { useMemo, memo } from 'react';
import { LPCover, AlbumInfo } from '@/components';
import styled, { css } from 'styled-components';
import { flexContainer } from '@/styles/mixin';
import { ProcessedResult } from '@/types/data';
import { PageProps, ViewProps } from '@/types/render';

export interface VinylItemProps extends PageProps, ViewProps {
  searchResult: ProcessedResult;
  [props: string]: unknown;
}

function VinylItem({ searchResult, page, view, ...props }: VinylItemProps) {
  const vinylSize = view === 'detail' ? 'large' : 'small';

  return useMemo(
    () => (
      <VinylItemWrapper view={view} {...props}>
        <LPCover
          searchResult={searchResult}
          size={vinylSize}
          hoverInteraction={view !== 'detail'}
        />
        <AlbumInfo searchResult={searchResult} page={page} view={view} />
      </VinylItemWrapper>
    ),
    [searchResult, page, view]
  );
}

const WRAPPER_STYLE = {
  block: css`
    ${flexContainer({ d: 'column', w: 'wrap' })};
    width: 150px;
  `,
  list: css`
    ${flexContainer({ d: 'row', w: 'nowrap', jc: 'center', g: '60px' })};
    min-width: 680px;
  `,
  detail: css`
    ${flexContainer({ d: 'column', w: 'wrap' })};
    width: 394px;
  `,
  myitem: css``,
};

const VinylItemWrapper = styled.article<ViewProps>`
  ${({ view }) => WRAPPER_STYLE[view]}
`;

export default memo(VinylItem);
