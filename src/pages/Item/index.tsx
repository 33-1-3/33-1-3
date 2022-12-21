import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
  ProcessedResourceUrlResult,
  ProcessedTracklist,
  RawTracklist,
} from '@/types/data';
import axios from 'axios';
import { getId, processReleaseResult, processMasterResult, getResourceUrl } from '@/utils/functions/processResult';
import { useRecoilState } from 'recoil';
import { dialogContentState, dialogState } from '@/recoil/globalState';

const vaildator = (tracklist: RawTracklist[]) =>
  tracklist.length !== 0 && Array.isArray(tracklist);

export default function Item() {
  const params = useParams();
  const { id } = params;
  const resourceUrl = getResourceUrl(id as string);
  const [tracklist, setTracklist] = useState({});
  const [isDialogOpen, setIsDialogOpen] = useRecoilState(dialogState);
  const [dialogContent] = useRecoilState(dialogContentState);
  const location = useLocation();
  const searchResult = location.state as ProcessedResult;
  const [searchResult, setSearchResult] = useState({
    titleInfo: { title: '', artist: '' },
    detailInfo: [{}],
  });

  useEffect(() => setIsDialogOpen(false), []);

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
            searchResult={searchResult as ProcessedResourceUrlResult}
            size="large"
            hoverInteraction={false}
          ></LPCover>
          <AlbumInfo
            searchResult={searchResult as ProcessedResourceUrlResult}
            tracklist={tracklist as ProcessedTracklist}
            page="all"
            view="detail"
            isUserCollections={true}
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
