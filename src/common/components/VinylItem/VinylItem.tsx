import LPCover from '../LPCover/LPCover';
import AlbumInfo, {
  ResultViewProps,
  AlbumInfoProps,
} from '../AlbumInfo/AlbumInfo';
import styled, { css } from 'styled-components';

export interface VinylItemProps extends AlbumInfoProps, ResultViewProps {
  imgURL: string;
}

function VinylItem({
  titleInfo,
  detailInfo,
  imgURL,
  page,
  view,
  ...props
}: VinylItemProps) {
  const vinylSize = view === 'detail' ? 'large' : 'small';
  const isHover = view !== 'detail';

  return (
    <VinylItemWrapper view={view} {...props}>
      <LPCover
        imgURL={imgURL}
        title={titleInfo.title}
        size={vinylSize}
        hoverInteraction={isHover}
      />
      <AlbumInfo
        titleInfo={titleInfo}
        detailInfo={detailInfo}
        page={page}
        view={view}
      />
    </VinylItemWrapper>
  );
}

const WRAPPER_STYLE = {
  cover: css`
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
