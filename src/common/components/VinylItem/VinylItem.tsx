import LPCover from '../LPCover/LPCover';
import { AlbumInfo } from '@/common/components';
import { ProcessedResult } from '@/types/data';
import { ResultViewProps } from '../AlbumInfo/AlbumInfo';
import styled, { css } from 'styled-components';

export interface VinylItemProps {
  searchResult: ProcessedResult;
  page: 'all' | 'collection';
  view: 'block' | 'list' | 'detail';
}

function VinylItem({ searchResult, page, view, ...props }: VinylItemProps) {
  const vinylSize = view === 'detail' ? 'large' : 'small';
  const isHover = view !== 'detail';

  return (
    <VinylItemWrapper view={view} {...props}>
      <LPCover
        searchResult={searchResult}
        size={vinylSize}
        hoverInteraction={isHover}
      />
      <AlbumInfo searchResult={searchResult} page={page} view={view} />
    </VinylItemWrapper>
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
    gap: 60px;
    width: 828px;
  `,
  detail: css`
    display: flex;
    flex-flow: column wrap;
    width: 394px;
  `,
};

const VinylItemWrapper = styled.article<ResultViewProps>`
  ${({ view }) => WRAPPER_STYLE[view]}
`;

export default VinylItem;
