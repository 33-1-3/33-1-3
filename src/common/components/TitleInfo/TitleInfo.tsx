import styled, { css } from 'styled-components';

export interface ViewProps {
  view: 'cover' | 'list' | 'detail';
}

export interface TitleInfoProps extends ViewProps {
  title: string;
  artist: string;
}

function TitleInfo({ title, artist, view }: TitleInfoProps) {
  return (
    <TitleInfoWrapper view={view}>
      <dt className="srOnly">{'앨범 제목'}</dt>
      <TitleText view={view}>{title}</TitleText>
      <dt className="srOnly">{'가수 이름'}</dt>
      <ArtistText view={view}>{artist}</ArtistText>
    </TitleInfoWrapper>
  );
}

const TEXT_WIDTH = {
  cover: '118px',
  list: '587px',
  detail: '346px',
};

const TITLE_FONT_SIZE = {
  cover: 'var(--text-bs)',
  list: '24px',
  detail: '36px',
};

const ARTIST_FONT_SIZE = {
  cover: 'var(--text-xs)',
  list: 'var(--text-md)',
  detail: 'var(--text-lg)',
};

const GAP_SIZE = {
  cover: 'var(--space-xs)',
  list: 'var(--space-sm)',
  detail: 'var(--space-lg)',
};

const textMixin = css<ViewProps>`
  width: ${({ view }) => TEXT_WIDTH[view]};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const TitleInfoWrapper = styled.dl<ViewProps>`
  width: min-content;
  display: flex;
  flex-flow: column;
  gap: ${({ view }) => GAP_SIZE[view]};
  color: var(--black);
`;

const TitleText = styled.dd<ViewProps>`
  ${textMixin};
  padding-top: 4px;
  font-weight: 700;
  font-size: ${({ view }) => TITLE_FONT_SIZE[view]};
`;

const ArtistText = styled.dd<ViewProps>`
  ${textMixin};
  font-weight: 400;
  font-size: ${({ view }) => ARTIST_FONT_SIZE[view]};
`;

export default TitleInfo;
