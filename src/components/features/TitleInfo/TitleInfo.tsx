import styled, { css } from 'styled-components';
import { flexContainer, textEllipsis } from '@/styles/mixin';
import { ViewProps } from '@/types/render';

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

const TEXT_WIDTH = Object.freeze({
  block: '118px',
  list: '40vw',
  detail: '346px',
  myitem: '400px',
});

const textMixin = Object.freeze(css<ViewProps>`
  ${textEllipsis};
  width: ${({ view }) => TEXT_WIDTH[view]};
  text-align: start;
  line-height: normal;
`);

const TITLE_INFO_WRAPPER_STYLE = Object.freeze({
  block: css`
    gap: var(--space-xs);
    width: min-content;
  `,
  list: css`
    gap: var(--space-xs);
    width: 48.2vw;
  `,
  detail: css`
    gap: var(--space-bs);
    width: min-content;
  `,
  myitem: css`
    gap: var(--space-bs);
    width: min-content;
  `,
});

const TITLE_TEXT_STYLE = Object.freeze({
  block: css`
    font-size: var(--text-bs);
  `,
  list: css`
    min-width: '432px';
    font-size: var(--text-md);
  `,
  detail: css`
    font-size: var(--text-lg);
  `,
  myitem: css`
    font-size: 20px;
  `,
});

const ARTIST_TEXT_STYLE = Object.freeze({
  block: css`
    font-size: var(--text-xs);
    color: var(--black);
  `,
  list: css`
    min-width: '432px';
    font-size: var(--text-md);
    color: var(--black);
  `,
  detail: css`
    font-size: var(--text-lg);
    color: var(--black);
  `,
  myitem: css`
    width: 280px;
    font-size: 20px;
    color: var(--gray-400);
  `,
});

const TitleInfoWrapper = styled.dl<ViewProps>`
  ${flexContainer({ d: 'column', w: 'wrap' })}
  ${({ view }) => TITLE_INFO_WRAPPER_STYLE[view]}
  color: var(--black);
`;

const TitleText = styled.dd<ViewProps>`
  ${textMixin};
  ${({ view }) => TITLE_TEXT_STYLE[view]};
  font-weight: 700;
`;

const ArtistText = styled.dd<ViewProps>`
  ${textMixin};
  ${({ view }) => ARTIST_TEXT_STYLE[view]};
  font-weight: 400;
`;

export default TitleInfo;
