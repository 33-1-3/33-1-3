import uuid from 'react-uuid';
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
  const iconSize = view === 'cover' ? 16 : 32;
  const iconType = page === 'all' ? 'plus' : 'minus';

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
            {listInfo.map(({ infoName, infoContent, isValid }) => {
              const key = uuid();

              return (
                <DetailInfo
                  key={key}
                  infoName={infoName}
                  infoContent={infoContent}
                  isValid={isValid}
                />
              );
            })}
          </ListInfoWrapper>
        )}
        <S_IconButton
          width={iconSize}
          height={iconSize}
          iconType={iconType}
          view={view}
        />
      </AlbumInfoWrapper>
      {view === 'detail' && (
        <DetailInfoWrapper>
          {detailInfo.map(({ infoName, infoContent, isValid }) => {
            const key = uuid();

            return (
              <DetailInfo
                key={key}
                infoName={infoName}
                infoContent={infoContent}
                isValid={isValid}
              />
            );
          })}
        </DetailInfoWrapper>
      )}
    </>
  );
}

const WRAPPER_STYLE = {
  cover: css`
    width: 150px;
    height: 76px;
    padding: 20px 8px;
  `,
  list: css`
    width: 618px;
    height: 152px;
    padding: 14px 0px;
  `,
  detail: css`
    width: 394px;
    height: 160px;
    padding: 36px 8px;
  `,
};

const BUTTON_STYLE = {
  cover: css`
    top: 20px;
    right: 8px;
  `,
  list: css`
    top: 60px;
    right: 0px;
  `,
  detail: css`
    top: 64px;
    right: 8px;
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
  margin-top: 24px;
`;

const DetailInfoWrapper = styled.dl`
  display: grid;
  grid-template-columns: 107px 267px;
  row-gap: var(--space-bs);
  width: 394px;
  padding: 0px 8px;
`;

const S_IconButton = styled(IconButton)<ResultViewProps>`
  position: absolute;
  ${({ view }) => BUTTON_STYLE[view]};
`;

export default AlbumInfo;
