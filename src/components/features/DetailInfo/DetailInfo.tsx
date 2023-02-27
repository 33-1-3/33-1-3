import uuid from 'react-uuid';
import { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { RawTracklist } from '@/types/data';

export interface InfoNameProps {
  infoName: 'Country' | 'Genre' | 'Label' | 'Style' | 'Released' | 'Tracklist';
}

export interface InfoContentProps {
  infoContent: string | string[] | RawTracklist[];
}

export interface DetailInfoProps extends InfoNameProps, InfoContentProps {
  isValid: boolean;
  isMyItem?: boolean;
}

const checkTracklist = ({ infoName }: InfoNameProps) =>
  infoName === 'Tracklist';

function DetailInfo({
  infoName,
  infoContent,
  isValid,
  isMyItem,
}: DetailInfoProps) {
  if (!isValid) return null;

  const isTracklist = checkTracklist({ infoName });
  const infoString =
    typeof infoContent === 'string' ? infoContent : infoContent.join(', ');

  return (
    <>
      <InfoName>{infoName}</InfoName>
      {isTracklist ? (
        <InfoContent>
          <Tracklist>
            {(infoContent as RawTracklist[]).map((track) => (
              <Fragment key={uuid()}>
                <span>{track.position}</span>
                <span>{track.title}</span>
                <span>{track.duration}</span>
              </Fragment>
            ))}
          </Tracklist>
        </InfoContent>
      ) : (
        <InfoContent>
          {isMyItem && <span aria-hidden={true}>{' ㆍ '}</span>}
          <span>{infoString}</span>
        </InfoContent>
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
