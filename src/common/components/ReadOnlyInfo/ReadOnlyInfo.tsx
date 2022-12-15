import uuid from 'react-uuid';
import styled from 'styled-components';
import { TitleInfo, DetailInfo } from '@/common/components';
import { ProcessedResult, ProcessedTracklist } from '@/types/data';

export interface ReadOnlyInfoProps {
  searchResult: ProcessedResult;
  tracklist: ProcessedTracklist;
}

function ReadOnlyInfo({ searchResult, tracklist }: ReadOnlyInfoProps) {
  const { titleInfo, detailInfo } = searchResult;
  const newDetailInfo = [...detailInfo, tracklist];

  return (
    <ReadOnlyWrapper>
      <TitleInfo
        title={titleInfo.title}
        artist={titleInfo.artist}
        view={'myitem'}
      />
      <DetailInfoWrapper>
        {newDetailInfo.map(({ infoName, infoContent, isValid }) => (
          <DetailInfo
            key={uuid()}
            infoName={infoName}
            infoContent={infoContent}
            isValid={isValid}
            isMyItem
          />
        ))}
      </DetailInfoWrapper>
      <BlurContainer />
    </ReadOnlyWrapper>
  );
}

const ReadOnlyWrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: 32px;
  width: 486px;
  margin: 28px;
`;

const DetailInfoWrapper = styled.dl`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  gap: 16px;
  width: 280px;
  height: 65vh;
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--gray-100);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const BlurContainer = styled.div`
  position: absolute;
  top: 70vh;
  width: 280px;
  height: 80px;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 28%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export default ReadOnlyInfo;
