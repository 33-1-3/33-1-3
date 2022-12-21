import uuid from 'react-uuid';
import { useState, useEffect, Fragment, useLayoutEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
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
  RawTracklist,
  ProcessedTracklist,
  PurchaseData,
  ProcessedResourceUrlResult,
} from '@/types/data';
import PURCHASE_INFO_NAME from '@/utils/constants/purchaseInfoName';
import {
  getResourceUrl,
  processMasterResult,
  processReleaseResult,
} from '@/utils/functions/processResult';
import { mockMemo, mockPurchaseInfoContent } from '@/utils/mocks/mockInfo';

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
  /* -------------------------------------------------------------------------- */
  const params = useParams();
  const { id } = params;
  const { userid } = useParams();
  const resourceUrl = getResourceUrl(id as string);
  const [isUserItem, setIsUserItem] = useState<boolean>(false);
  /* -------------------------------------------------------------------------- */
  const [tracklist, setTracklist] = useState({});
  const navigate = useNavigate();
  const [_, setDialog] = useRecoilState(dialogState);
  const [searchResult, setSearchResult] = useState({
    titleInfo: { title: '', artist: '' },
    detailInfo: [{}],
    imgUrl: '',
  });

  useLayoutEffect(() => {
    async function checkAuth() {
      try {
        const res = await axios.get('http://localhost:3313/auth', {
          withCredentials: true,
        });
        const {
          data: { isLogin, userId },
        } = res;

        if (isLogin && userId === userid) {
          setIsUserItem(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
    checkAuth();
  }, []);

  useEffect(() => {
    async function fetchTrackList() {
      try {
        const res = await axios.get(
          `${resourceUrl}?&key=${import.meta.env.VITE_API_KEY}&secret=${
            import.meta.env.VITE_API_SECRET
          }`
        );
        if (resourceUrl.includes('releases')) {
          const { tracklist, ...result } = processReleaseResult(res.data);
          setSearchResult(result);
          setTracklist(tracklist);
        } else if (resourceUrl.includes('masters')) {
          const { tracklist, ...result } = processMasterResult(res.data);
          setSearchResult(result);
          setTracklist(tracklist);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrackList();
  }, []);

  useEffect(() => {
    async function updateDB() {
      try {
        console.log(searchResult);
        // const res = await axios.put(
        //   `${import.meta.env.VITE_DB_SERVER}commonVinyl/${id}`
        // );
      } catch (error) {
        console.log(error);
      }
    }
    updateDB();
  }, []);

  return (
    <>
      <MyItemPageWrapper>
        <h1 className="srOnly">{`${searchResult.titleInfo.title} 상세 정보`}</h1>
        <ReadOnlyInfo
          searchResult={searchResult as ProcessedResourceUrlResult}
          tracklist={tracklist as ProcessedTracklist}
        />
        <WritableInfo
          purchaseInfo={mockPurchaseInfoContent}
          memoInfo={mockMemo}
        />
        {isUserItem && (
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
        )}
        <CloseButton onClick={() => navigate(-1)}>
          <CloseIcon />
        </CloseButton>
        <BackVinyl
          className="backVinyl"
          imgUrl={searchResult.imgUrl as string}
        />
      </MyItemPageWrapper>
    </>
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
  grid-template-columns: repeat(3, 96px);
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
