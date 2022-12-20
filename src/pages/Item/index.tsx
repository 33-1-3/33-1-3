import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Header, Main, Footer, LPCover, AlbumInfo } from '@/common/components';
import {
  ProcessedResult,
  ProcessedTracklist,
  RawTracklist,
} from '@/types/data';
import axios from 'axios';

const vaildator = (tracklist: RawTracklist[]) =>
  tracklist.length !== 0 && Array.isArray(tracklist);

export default function Item() {
  const [tracklist, setTracklist] = useState({});
  const location = useLocation();
  const searchResult = location.state as ProcessedResult;

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
          data-releasedid={searchResult.id}
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
    </>
  );
}

const DetailWrapper = styled.div`
  width: min-content;
  margin: 0 auto;
  margin-top: 60px;
`;
