import uuid from 'react-uuid';
import { useState, useEffect, Fragment } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { dialogState, editWritableInfoDialogState } from '@/recoil/globalState';
import styled from 'styled-components';
import axios from 'axios';
import {
  ReadOnlyInfo,
  SquareButton,
  BackVinyl,
  WritableInfo,
} from '@/common/components';
import {
  InfoName,
  InfoContent,
} from '@/common/components/WritableInfo/WritableInfo';
import { ReactComponent as CloseIcon } from '@/assets/close.svg';
import {
  ProcessedResult,
  RawTracklist,
  ProcessedTracklist,
  PurchaseData,
} from '@/types/data';
import PURCHASE_INFO_NAME from '@/utils/constants/purchaseInfoName';
import tracklistVaildator from '@/utils/functions/tracklistValidator';
import { mockPurchaseInfoContent, mockMemo } from '@/utils/mocks/mockInfo';

export interface DetailInfoProps {
  infoName: 'Country' | 'Genre' | 'Label' | 'Style' | 'Released' | 'Tracklist';
  infoContent: string | string[] | RawTracklist[];
  isValid: boolean;
}

const createModalContent = (
  infoName: string[],
  infoContent: PurchaseData[]
) => (
  <PurchaseInfo>
    {infoName.map((name) => (
      <InfoName key={uuid()}>{name}</InfoName>
    ))}
    {infoContent.map(({ date, price, state }) => (
      <Fragment key={uuid()}>
        <InfoContent>{date}</InfoContent>
        <InfoContent>{price}</InfoContent>
        <InfoContent>{state}</InfoContent>
      </Fragment>
    ))}
  </PurchaseInfo>
);

export default function MyItem() {
  const [tracklist, setTracklist] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const [_, setDialog] = useRecoilState(dialogState);

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
        onClick={() =>
          setDialog({
            ...editWritableInfoDialogState,
            children: createModalContent(
              PURCHASE_INFO_NAME,
              mockPurchaseInfoContent
            ),
          })
        }
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

const PurchaseInfo = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 6.5vw);
  column-gap: 56px;
  row-gap: var(--space-bs);
  width: min-content;
  margin: 0 auto;
  text-align: center;
  overflow-x: hidden;
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
