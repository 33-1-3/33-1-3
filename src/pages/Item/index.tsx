import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {
  Header,
  Main,
  Footer,
  LPCover,
  AlbumInfo,
  NewDialog,
  SelectCollectionForm,
} from '@/common/components';
import {
  ProcessedResult,
  ProcessedTracklist,
  RawTracklist,
} from '@/types/data';
import axios from 'axios';
import { getId } from '@/utils/functions/processResult';
import { useRecoilState } from 'recoil';
import { dialogContentState, dialogState } from '@/recoil/globalState';

const vaildator = (tracklist: RawTracklist[]) =>
  tracklist.length !== 0 && Array.isArray(tracklist);

export default function Item() {
  const [tracklist, setTracklist] = useState({});
  const [isDialogOpen, setIsDialogOpen] = useRecoilState(dialogState);
  const [dialogContent] = useRecoilState(dialogContentState);

  const location = useLocation();
  const searchResult = location.state as ProcessedResult;

  useEffect(() => setIsDialogOpen(false), []);

  useEffect(() => {
    async function fetchTrackList() {
      try {
        const res = await axios.get(searchResult.resourceUrl);

        setTracklist({
          infoName: 'Tracklist',
          infoContent: res.data.tracklist,
          isValid: vaildator(res.data.tracklist),
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrackList();
  }, []);

  return (
    <>
      <Header />
      <Main>
        <h1 className="srOnly">LP 상세 정보</h1>
        <DetailWrapper
          className="infoContainer"
          data-releasedid={getId(searchResult.resourceUrl)}
        >
          <LPCover
            searchResult={searchResult}
            size="large"
            hoverInteraction={false}
          ></LPCover>
          <AlbumInfo
            searchResult={searchResult}
            tracklist={tracklist as ProcessedTracklist}
            page="all"
            view="detail"
          />
        </DetailWrapper>
      </Main>
      <Footer />
      <NewDialog
        isOpened={isDialogOpen}
        width={480}
        height={480}
        title="Add Item"
        onConfirm={(e) => console.log(dialogContent.collectionList)}
        onClose={() => setIsDialogOpen(false)}
      >
        <SelectCollectionForm collectionList={dialogContent.collectionList} />
      </NewDialog>
    </>
  );
}

const DetailWrapper = styled.div`
  width: min-content;
  margin: 0 auto;
  margin-top: 60px;
`;
