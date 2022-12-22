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
  FloatingButton,
  GoToTop,
} from '@/common/components';
import {
  ProcessedResourceUrlResult,
  ProcessedTracklist,
  RawTracklist,
} from '@/types/data';
import axios from 'axios';
import {
  getId,
  processReleaseResult,
  processMasterResult,
  getResourceUrl,
  commonRelease,
  commonMaster,
} from '@/utils/functions/processResult';
import { useRecoilState } from 'recoil';
import {
  dialogContentState,
  dialogState,
  userState,
} from '@/recoil/globalState';

const vaildator = (tracklist: RawTracklist[]) =>
  tracklist.length !== 0 && Array.isArray(tracklist);

export default function Item() {
  const params = useParams();
  const { id } = params;
  const resourceUrl = getResourceUrl(id as string);
  const [tracklist, setTracklist] = useState({});
  const [userId] = useRecoilState(userState);
  const [dialogType, setDialogType] = useRecoilState(dialogState);
  const [dialogContent] = useRecoilState(dialogContentState);
  const [searchResult, setSearchResult] = useState({
    titleInfo: { title: '', artist: '' },
    detailInfo: [{}],
  });

  useEffect(() => setDialogType(''), []);

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
          data-releasedid={getId(resourceUrl)}
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
          />
        </DetailWrapper>
        <FloatingButton />
        <GoToTop />
      </Main>
      <Footer />
      <NewDialog
        isOpened={dialogType === 'add-item'}
        width={480}
        height={480}
        title="Add Item"
        onConfirm={async () => {
          const resourceUrl = getResourceUrl(dialogContent.releasedId);
          const resourceUrlWithAuth =
            resourceUrl +
            `?key=${import.meta.env.VITE_API_KEY}&secret=${
              import.meta.env.VITE_API_SECRET
            }`;
          const splitedResourceUrl = resourceUrl.split('/');
          const type = splitedResourceUrl[splitedResourceUrl.length - 2];
          const { data: response } = await axios.get(resourceUrlWithAuth);

          let commonData;
          if (type === 'releases') commonData = commonRelease(response);
          if (type === 'masters') commonData = commonMaster(response);

          console.log('COMMON', commonData);
          console.log(dialogContent.collectionList);

          await axios.post(`${import.meta.env.VITE_DB_SERVER}vinyl/${userId}`, {
            releasedId: commonData?.id,
            // selectedCollectionIds: dialogContent.collectionList
            //   .filter((collection) => collection.isChecked)
            //   .map((collection) => collection.id),
            collectionList: dialogContent.collectionList,
            imgUrl: commonData?.imgUrl,
            title: commonData?.title,
            artist: commonData?.artist,
            year: commonData?.year,
            genres: commonData?.genre,
            resourceUrl: commonData?.resourceUrl,
          });
        }}
        onClose={() => setDialogType('')}
      >
        <SelectCollectionForm />
      </NewDialog>
    </>
  );
}

const DetailWrapper = styled.div`
  width: min-content;
  margin: 0 auto;
  margin-top: 60px;
`;
