import styled, { css } from 'styled-components';

const ARRAY_INFO = ['Genre', 'Style', 'Label'];

export interface TracklistType {
  position: string;
  title: string;
  duration: string;
}

export interface commonProps {
  infoName: 'Country' | 'Genre' | 'Label' | 'Style' | 'Released' | 'Tracklist';
  infoContent: string | Array<string> | Array<TracklistType>;
}

export interface DetailInfoProps extends commonProps {
  isValid: boolean;
}

const checkTracklist = ({ infoName, infoContent }: commonProps) =>
  Array.isArray(infoContent) && !ARRAY_INFO.includes(infoName);

function DetailInfo({ infoName, infoContent, isValid }: DetailInfoProps) {
  if (!isValid) return null;

  const isTracklist = checkTracklist({ infoName, infoContent });

  const infoString =
    typeof infoContent === 'string' && !isTracklist
      ? infoContent
      : (infoContent as Array<string>).join(', ');

  return (
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
        <InfoContent>{infoString}</InfoContent>
      )}
    </>
  );
}

const commonInfoStyle = css`
  font-size: var(--text-bs);
  text-align: start;
  line-height: normal;
  color: var(--gray-400);
`;

const InfoName = styled.dt`
  font-weight: 700;
  ${commonInfoStyle};
`;

const InfoContent = styled.dd`
  font-weight: 400;
  word-break: break-all;
  ${commonInfoStyle};
`;

const Tracklist = styled.div`
  display: grid;
  grid-template-columns: 23px 152px 36px;
  column-gap: var(--space-xl);
  row-gap: var(--space-bs);
`;

export default DetailInfo;
