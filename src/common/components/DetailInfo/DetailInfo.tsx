import styled, { css } from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

export interface DetailInfoProps {
  infoName: string;
  infoContent: string | Array<string>;
}

const SECRET = import.meta.env.VITE_API_SECRET;
const KEY = import.meta.env.VITE_API_KEY;

const useFetch = () => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function fetchResults() {
      try {
        const res = await axios.get(
          `https://api.discogs.com/database/search?q=${'아이유'}&key=${KEY}&secret=${SECRET}&format=Vinyl&sort=title&sort_order=asc`
        );
        setSearchResults(res.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchResults();
  }, []);

  return searchResults;
};

function DetailInfo({ infoName, infoContent }: DetailInfoProps) {
  const searchResults = useFetch();
  console.log(searchResults);

  return (
    <>
      <InfoName>{infoName}</InfoName>
      <InfoContent>{infoContent}</InfoContent>
    </>
  );
}

const infoCommonStyle = css`
  font-size: var(--text-bs);
  color: var(--gray-400);
`;

const InfoName = styled.dt`
  font-weight: 700;
  ${infoCommonStyle};
`;

const InfoContent = styled.dt`
  font-weight: 400;
  ${infoCommonStyle};
`;

export default DetailInfo;
