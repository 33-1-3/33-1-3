import { useSearchParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {
  Header,
  Main,
  Footer,
  Dropdown,
  SearchResultText,
  VinylItems,
} from '@/common/components';
import { ResultViewProps } from '@/common/components/AlbumInfo/AlbumInfo';
import {
  SORT_CONTENT,
  SORT_LABEL,
  VIEW_CONTENT,
  VIEW_LABEL,
} from '@/utils/constants/dropdown';
import processResult from '@/utils/functions/processResult';
import { ProcessedResult } from '@/types/data';

const SECRET = import.meta.env.VITE_API_SECRET;
const KEY = import.meta.env.VITE_API_KEY;

export default function SearchResult() {
  const [searchParams] = useSearchParams();
  const [itemCount, setItemCount] = useState<number>(0);
  const [pageNum, setPageNum] = useState<number>(1);
  const [result, setResult] = useState<ProcessedResult[]>([]);
  const observerTarget = useRef<HTMLDivElement>(null);

  const params = new URLSearchParams(window.location.search);
  const value = params.get('query');
  const sort = params.get('sort');
  const url = `https://api.discogs.com/database/search?&q=${value}&key=${KEY}&secret=${SECRET}&format=vinyl${
    sort === 'date' ? '&sort=date_added&sort_order=desc' : ''
  }&page=${pageNum}&per_page=24`;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPageNum((pageNum) => (pageNum += 1));
      }
    });

    observer.observe(observerTarget?.current as HTMLDivElement);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    async function fetchResults() {
      try {
        const res = await axios.get(url);

        setItemCount(res.data.pagination.items);
        setResult([...result, ...processResult(res.data.results)]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchResults();
  }, [searchParams, pageNum]);

  return (
    <>
      <Header />
      <Main>
        <h1 className="srOnly">Search Result</h1>
        <SearchResultWrapper>
          <SearchResultText resultCount={itemCount} />
          <Dropdown content={SORT_CONTENT} dropKind="sort" label={SORT_LABEL} />
          <Dropdown content={VIEW_CONTENT} dropKind="view" label={VIEW_LABEL} />
        </SearchResultWrapper>
        <VinylItems
          searchResult={result}
          page={'all'}
          view={params.get('view') as ResultViewProps['view']}
        />
        <div ref={observerTarget} style={{ width: '100vw', height: '50px' }} />
      </Main>
      <Footer />
    </>
  );
}

const SearchResultWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: var(--space-bs);
  width: 828px;
  height: 34px;
  margin: 0 auto;
  margin-top: 36px;

  > div:first-child {
    margin-right: auto;
  }

  > div:nth-of-type(2) {
    position: absolute;
    top: 0;
    right: 134px;
  }

  > div:last-child {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
