import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import {
  ReadOnlyInfo,
  SquareButton,
  BackVinyl,
  WritableInfo,
} from '@/common/components';
import { ReactComponent as CloseIcon } from '@/assets/close.svg';
import {
  ProcessedResult,
  RawTracklist,
  ProcessedTracklist,
} from '@/types/data';
import { mockPurchaseInfoContent, mockMemo } from '@/utils/mocks/mockInfo';
import tracklistVaildator from '@/utils/functions/tracklistValidator';

export interface DetailInfoProps {
  infoName: 'Country' | 'Genre' | 'Label' | 'Style' | 'Released' | 'Tracklist';
  infoContent: string | string[] | RawTracklist[];
  isValid: boolean;
}

export default function MyItem() {
  const [tracklist, setTracklist] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const searchResult = location.state as ProcessedResult;

  useEffect(() => {
    async function fetchTrackList() {
      try {
        const res = await axios.get(searchResult.resourceUrl);

        setTracklist({
          infoName: 'Tracklist',
          infoContent: res.data.tracklist,
          isValid: tracklistVaildator(res.data.tracklist),
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrackList();
  }, []);

  return (
    <MyItemPageWrapper>
      <h1 className="srOnly">{`${searchResult.titleInfo.title} 상세 정보`}</h1>
      <ReadOnlyInfo
        searchResult={searchResult}
        tracklist={tracklist as ProcessedTracklist}
      />
      <WritableInfo purchaseInfo={mockPurchaseInfoContent} memo={mockMemo} />
      <StyledSquareButton
        fontSize={20}
        size="small"
        isFilled={true}
        onClick={() => console.log('모달 연결 필요!')}
      >
        {'편집하기'}
      </StyledSquareButton>
      <CloseButton onClick={() => navigate(-1)}>
        <CloseIcon />
      </CloseButton>
      <BackVinyl className="backVinyl" imgUrl={searchResult.imgUrl as string} />
    </MyItemPageWrapper>
  );
}

const MyItemPageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const StyledSquareButton = styled(SquareButton)`
  position: absolute;
  right: var(--space-md);
  bottom: var(--space-md);
`;

const CloseButton = styled.button`
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  width: 16px;
  height: 16px;
`;
