import TitleInfo from '../TitleInfo/TitleInfo';
import DetailInfo, { DetailInfoProps } from '../DetailInfo/DetailInfo';
import IconButton from '../IconButton/IconButton';
import styled, { css } from 'styled-components';

export interface ResultViewProps {
  view: 'cover' | 'list' | 'detail';
}

export interface TitleInfoProps {
  title: string;
  artist: string;
}

export interface AlbumInfoProps extends ResultViewProps {
  titleInfo: TitleInfoProps;
  detailInfo: DetailInfoProps[];
  page: 'all' | 'collection';
}

function AlbumInfo({
  titleInfo,
  detailInfo,
  page,
  view,
  ...props
}: AlbumInfoProps) {
  const buttonSize = view === 'cover' ? 16 : 32;
  const buttonType = page === 'all' ? 'plus' : 'minus';

  const listInfo = detailInfo.filter(
    ({ infoName }) => infoName === 'Released' || infoName === 'Genre'
  );

  return (
    <>
      <AlbumInfoWrapper view={view} {...props}>
        <TitleInfo
          title={titleInfo.title}
          artist={titleInfo.artist}
          view={view}
        />
        {view === 'list' && (
          <ListInfoWrapper>
            {listInfo.map(({ infoName, infoContent, isValid }) => (
              <DetailInfo
                key={infoName}
                infoName={infoName}
                infoContent={infoContent}
                isValid={isValid}
              />
            ))}
          </ListInfoWrapper>
        )}
        <S_IconButton
          width={buttonSize}
          height={buttonSize}
          iconType={buttonType}
          view={view}
        />
      </AlbumInfoWrapper>
      {view === 'detail' && (
        <DetailInfoWrapper>
          {detailInfo.map(({ infoName, infoContent, isValid }) => (
            <DetailInfo
              key={infoName}
              infoName={infoName}
              infoContent={infoContent}
              isValid={isValid}
            />
          ))}
        </DetailInfoWrapper>
      )}
    </>
  );
}

const WRAPPER_STYLE = {
  cover: css`
    width: 150px;
    height: 76px;
    padding: var(--space-md) var(--space-xs);
  `,
  list: css`
    width: 618px;
    height: 152px;
    padding: 10px 0px;
  `,
  detail: css`
    width: 394px;
    height: 160px;
    padding: 36px var(--space-xs);
  `,
};

const BUTTON_STYLE = {
  cover: css`
    top: var(--space-lg);
    right: var(--space-xs);
  `,
  list: css`
    top: 60px;
    right: 0px;
  `,
  detail: css`
    top: 64px;
    right: var(--space-xs);
  `,
};

const AlbumInfoWrapper = styled.div<ResultViewProps>`
  position: relative;
  ${({ view }) => WRAPPER_STYLE[view]};
`;

const ListInfoWrapper = styled.dl`
  display: grid;
  grid-template-columns: 103px 483px;
  row-gap: var(--space-bs);
  width: 394px;
  margin-top: var(--space-lg);
`;

const DetailInfoWrapper = styled.dl`
  display: grid;
  grid-template-columns: 107px 267px;
  row-gap: var(--space-bs);
  width: 394px;
  padding: 0px var(--space-xs);
`;

const S_IconButton = styled(IconButton)<ResultViewProps>`
  position: absolute;
  ${({ view }) => BUTTON_STYLE[view]};
`;

export default AlbumInfo;
