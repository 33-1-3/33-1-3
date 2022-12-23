import styled, { css } from 'styled-components';

export interface ViewProps {
  view: 'block' | 'list' | 'detail' | 'myitem';
}

export interface TitleInfoProps extends ViewProps {
  title: string;
  artist: string;
}

function TitleInfo({ title, artist, view }: TitleInfoProps) {
  return (
    <TitleInfoWrapper view={view}>
      <dt className="srOnly">{'앨범 제목'}</dt>
      <TitleText title={title} view={view}>
        {title}
      </TitleText>
      <dt className="srOnly">{'가수 이름'}</dt>
      <ArtistText title={artist} view={view}>
        {artist}
      </ArtistText>
    </TitleInfoWrapper>
  );
}

const TEXT_WIDTH = {
  block: '118px',
  list: '40vw',
  detail: '346px',
  myitem: '400px',
};

const TITLE_FONT_SIZE = {
  block: 'var(--text-bs)',
  list: '24px',
  detail: '36px',
  myitem: '28px',
};

const ARTIST_FONT_SIZE = {
  block: 'var(--text-xs)',
  list: 'var(--text-md)',
  detail: 'var(--text-lg)',
  myitem: '20px',
};

const GAP_SIZE = {
  block: 'var(--space-xs)',
  list: 'var(--space-xs)',
  detail: 'var(--space-bs)',
  myitem: 'var(--space-bs)',
};

const textMixin = css<ViewProps>`
  width: ${({ view }) => TEXT_WIDTH[view]};
  overflow: hidden;
  white-space: nowrap;
  text-align: start;
  text-overflow: ellipsis;
  word-break: break-all;
  line-height: normal;
`;

const TitleInfoWrapper = styled.dl<ViewProps>`
  width: ${({ view }) => (view === 'list' ? '48.2vw' : 'min-content')};
  display: flex;
  flex-flow: column wrap;
  gap: ${({ view }) => GAP_SIZE[view]};
  color: var(--black);
`;

const TitleText = styled.dd<ViewProps>`
  ${textMixin};
  ${({ view }) => view === 'list' && 'min-width: 432px'};
  /* padding: 4px 0; */
  font-weight: 700;
  font-size: ${({ view }) => TITLE_FONT_SIZE[view]};
`;

const ArtistText = styled.dd<ViewProps>`
  ${textMixin};
  ${({ view }) => view === 'list' && 'min-width: 432px'};
  width: ${({ view }) => (view === 'myitem' ? '280px' : '')};
  font-weight: 400;
  font-size: ${({ view }) => ARTIST_FONT_SIZE[view]};
  color: ${({ view }) =>
    view === 'myitem' ? 'var(--gray-400)' : 'var(--black)'};
`;

export default TitleInfo;
