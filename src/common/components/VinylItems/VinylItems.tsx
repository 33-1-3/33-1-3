import uuid from 'react-uuid';
import VinylItem from '../VinylItem/VinylItem';
import { TitleInfoProps } from '../TitleInfo/TitleInfo';
import { DetailInfoProps } from '../DetailInfo/DetailInfo';
import { ResultViewProps } from '../AlbumInfo/AlbumInfo';
import styled, { css } from 'styled-components';

export interface VinylItemProps {
  titleInfo: TitleInfoProps;
  detailInfo: DetailInfoProps[];
  imgURL: string;
}

export interface VinylItemsProps extends ResultViewProps {
  searchResult: VinylItemProps[];
  page: 'all' | 'collection';
}

function VinylItems({ searchResult, page, view, ...props }: VinylItemsProps) {
  return (
    <VinylItemsWrapper view={view} {...props}>
      {searchResult.map(({ titleInfo, detailInfo, imgURL }) => (
        <VinylItem
          key={uuid()}
          titleInfo={titleInfo}
          detailInfo={detailInfo}
          imgURL={imgURL}
          page={page}
          view={view}
        />
      ))}
    </VinylItemsWrapper>
  );
}

const WRAPPER_STYLE = {
  cover: css`
    flex-flow: row wrap;
    justify-content: flex-start;
    column-gap: 76px;
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
  margin-top: 32px;
  ${({ view }) => WRAPPER_STYLE[view]};
`;

export default VinylItems;
