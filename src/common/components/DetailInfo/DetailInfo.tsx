import styled, { css } from 'styled-components';

const ARRAY_INFO = ['Genre', 'Style', 'Label'];

export interface TracklistType {
  position: string;
  title: string;
  duration: string;
}

export interface commonProps {
  infoName: 'Country' | 'Genre' | 'Label' | 'Style' | 'Year' | 'Tracklist';
  infoContent: string | Array<string> | Array<TracklistType>;
}

export interface DetailInfoProps extends commonProps {
  isValid: boolean;
}

const checkTracklist = ({ infoName, infoContent }: commonProps) =>
  Array.isArray(infoContent) && !ARRAY_INFO.includes(infoName);

function DetailInfo({ infoName, infoContent, isValid }: DetailInfoProps) {
  const isTracklist = checkTracklist({ infoName, infoContent });

  const infoString = isTracklist ? (
    <InfoContent>{(infoContent as Array<string>).join(', ')}</InfoContent>
  ) : (
    infoContent
  );

  return isValid ? (
    <>
      <InfoName>{infoName}</InfoName>
      {isTracklist ? (
        <InfoContent>
          <Tracklist>
            {(infoContent as Array<TracklistType>).map((track) => (
              <>
                <span>{track.position}</span>
                <span>{track.title}</span>
                <span>{track.duration}</span>
              </>
            ))}
          </Tracklist>
        </InfoContent>
      ) : (
        <InfoContent>{infoString as JSX.Element}</InfoContent>
      )}
    </>
  ) : null;
}

const commonInfoStyle = css`
  font-size: var(--text-bs);
  color: var(--gray-400);
`;

const InfoName = styled.dt`
  font-weight: 700;
  ${commonInfoStyle};
`;

const InfoContent = styled.dd`
  font-weight: 400;
  ${commonInfoStyle};
`;

const Tracklist = styled.div`
  display: grid;
  grid-template-columns: 51px 180px 36px;
  row-gap: var(--space-bs);
`;

export default DetailInfo;
