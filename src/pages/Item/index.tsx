import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {
  Header,
  Main,
  Footer,
  LPCover,
  AlbumInfo,
  LoadingSpinner,
} from '@/common/components';
import {
  ProcessedResourceUrlResult,
  ProcessedResult,
  ProcessedTracklist,
} from '@/types/data';
import axios from 'axios';
import {
  processReleaseResult,
  processMasterResult,
} from '@/utils/functions/processResult';

export default function Item() {
  const [tracklist, setTracklist] = useState({});
  const location = useLocation();
  const { resourceUrl } = location.state as ProcessedResult;
  const [searchResult, setSearchResult] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
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
        {isLoading ? (
          <LoadingSpinner isLastPage={!isLoading} height="20rem" />
        ) : (
          <>
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
              />
            </DetailWrapper>
          </>
        )}
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
