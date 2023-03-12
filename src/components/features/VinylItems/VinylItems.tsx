import { memo } from 'react';
import { VinylItem } from '@/components';
import styled, { css } from 'styled-components';
import { flexContainer } from '@/styles/mixin';
import { getId } from '@/utils/functions/processResult';
import { ProcessedResult } from '@/types/data';
import { PageProps, ViewProps } from '@/types/render';

export interface VinylItemsProps extends PageProps, ViewProps {
  searchResults: ProcessedResult[];
  [props: string]: unknown;
}

function VinylItems({ searchResults, page, view, ...props }: VinylItemsProps) {
  return (
    <VinylItemsWrapper view={view} {...props}>
      {searchResults.map((result) => {
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
    ${flexContainer({ d: 'column', w: 'wrap', jc: 'center' })}
    row-gap: 60px;
  `,
  detail: css``,
  myitem: css``,
};

const VinylItemsWrapper = styled.section<ViewProps>`
  ${flexContainer({})}
  // TODO: 반응형을 위한 min&max width 처리는 main 컴포넌트에서 해야 함
  min-width: 680px;
  max-width: 828px;
  margin: 52px auto 0;
  ${({ view }) => WRAPPER_STYLE[view]};
`;

export default memo(VinylItems);
