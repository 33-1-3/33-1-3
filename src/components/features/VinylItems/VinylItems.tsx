import { memo } from 'react';
import uuid from 'react-uuid';
import styled, { css } from 'styled-components';
import { VinylItem } from '@/components';
import { getId } from '@/utils/functions/processResult';
import { ProcessedResult } from '@/types/data';
import { ViewProps, PageProps } from '@/types/render';

export interface VinylItemsProps extends ViewProps, PageProps {
  searchResult: ProcessedResult[];
}

function VinylItems({ searchResult, page, view, ...props }: VinylItemsProps) {
  return (
    <VinylItemsWrapper view={view} {...props}>
      {searchResult.map((result) => {
        const releasedId = getId(result.resourceUrl);
        return (
          <VinylItem
            key={releasedId}
            searchResult={result}
            page={page}
            view={view}
            data-releasedid={releasedId}
            className="infoContainer"
          />
        );
      })}
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

const VinylItemsWrapper = styled.section<ViewProps>`
  display: flex;
  min-width: 680px;
  max-width: 828px;
  margin: 0 auto;
  margin-top: 52px;
  ${({ view }) => WRAPPER_STYLE[view]};
`;

export default memo(VinylItems);
