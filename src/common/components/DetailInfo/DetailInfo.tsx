import styled, { css } from 'styled-components';

const ARRAY_INFO = ['Genre', 'Style', 'Label'];

export interface TrackListType {
  position: string;
  title: string;
  duration: string;
}

export interface DetailInfoProps<T> {
  infoName: 'Country' | 'Genre' | 'Label' | 'Style' | 'Year' | 'Tracklist';
  infoContent: T;
  isValidInfo: boolean;
}

function DetailInfo<T>({
  infoName,
  infoContent,
  isValidInfo,
}: DetailInfoProps<T>) {
  return isValidInfo ? (
    <>
      <InfoName>{infoName}</InfoName>
      {typeof infoContent === 'string' && (
        <InfoContent>{infoContent}</InfoContent>
      )}
      {Array.isArray(infoContent) && ARRAY_INFO.includes(infoName) && (
        <InfoContent>{infoContent.join(', ')}</InfoContent>
      )}
      {Array.isArray(infoContent) && !ARRAY_INFO.includes(infoName) && (
        <InfoContent>
          <TrackList>
            {infoContent.map((track: TrackListType) => (
              <>
                <span>{track.position}</span>
                <span>{track.title}</span>
                <span>{track.duration}</span>
              </>
            ))}
          </TrackList>
        </InfoContent>
      )}
    </>
  ) : null;
}

const infoCommonStyle = css`
  font-size: var(--text-bs);
  color: var(--gray-400);
`;

const InfoName = styled.dt`
  font-weight: 700;
  ${infoCommonStyle};
`;

const InfoContent = styled.dd`
  font-weight: 400;
  ${infoCommonStyle};
`;

const TrackList = styled.div`
  display: grid;
  grid-template-columns: 51px 180px 36px;
  row-gap: var(--space-bs);
`;

export default DetailInfo;
