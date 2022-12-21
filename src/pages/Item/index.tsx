import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Header, Main, Footer, LPCover, AlbumInfo } from '@/common/components';
import { ProcessedResourceUrlResult, ProcessedTracklist } from '@/types/data';
import axios from 'axios';
import {
  processReleaseResult,
  processMasterResult,
  getResourceUrl,
} from '@/utils/functions/processResult';

export default function Item() {
  const params = useParams();
  const { id } = params;
  const resourceUrl = getResourceUrl(id as string);
  const [tracklist, setTracklist] = useState({});
  const [searchResult, setSearchResult] = useState({
    titleInfo: { title: '', artist: '' },
    detailInfo: [{}],
  });

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
        <DetailWrapper>
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
    </>
  );
}

const DetailWrapper = styled.div`
  width: min-content;
  margin: 0 auto;
  margin-top: 60px;
`;
