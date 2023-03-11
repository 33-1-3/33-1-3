import { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { gridContainer } from '@/styles/mixin';
import checkTracklist from '@/utils/functions/checkTracklist';
import { RawTracklist } from '@/types/data';

export interface DetailInfoProps {
  infoName: 'Country' | 'Genre' | 'Label' | 'Style' | 'Released' | 'Tracklist';
  infoContent: string | string[] | RawTracklist[];
  isValid: boolean;
  isMyItem?: boolean;
}

function DetailInfo({
  infoName,
  infoContent,
  isValid,
  isMyItem = false,
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
            {(infoContent as RawTracklist[]).map((track, idx) => (
              <Fragment key={idx}>
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

const commonInfoStyle = Object.freeze(css`
  font-size: var(--text-bs);
  text-align: start;
  line-height: normal;
  color: var(--gray-400);
`);

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
  ${gridContainer({ gtc: '23px 152px 36px', rg: '16px', cg: '28px' })}
`;

export default DetailInfo;
