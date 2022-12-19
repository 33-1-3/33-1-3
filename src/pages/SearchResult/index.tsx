import { useSearchParams } from 'react-router-dom';
import { useState, useEffect, useRef, useMemo } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {
  Header,
  Main,
  Footer,
  Dropdown,
  SearchResultText,
  VinylItems,
  GoToTop,
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

// 옵저버 범위 설정값
// interface IntersectionObserverInit {
//   root?: Element | Document | null;
//   rootMargin?: string;
//   threshold?: number | number[];
// }

export default function SearchResult() {
  const [searchParams] = useSearchParams();
  const [itemCount, setItemCount] = useState<number>(0);
  const [pageNum, setPageNum] = useState<number>(1);
  const [totalPageNum, setTotalPageNum] = useState<number>(1);
  const [result, setResult] = useState<ProcessedResult[]>([]);
  const observerTarget = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const params = new URLSearchParams(window.location.search);
  const value = params.get('query');
  const sort = params.get('sort');

  const url = `https://api.discogs.com/database/search?&q=${value}&key=${KEY}&secret=${SECRET}&format=vinyl&sort=${
    sort === 'date' ? 'date_added&sort_order=desc' : 'score'
  }&page=${pageNum}&per_page=24`;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (pageNum === totalPageNum) return;

      if (entries[0].isIntersecting) {
        setPageNum((pageNum) => (pageNum += 1));
      }
    });

    observer.observe(observerTarget?.current as HTMLDivElement);

    return () => observer.disconnect();
  }, [result]);

  useEffect(() => {
    async function fetchResults() {
      setPageNum(1);
      setIsLoading(true);

      try {
        console.log('처음');

        const res = await axios.get(
          `https://api.discogs.com/database/search?&q=${value}&key=${KEY}&secret=${SECRET}&format=vinyl&sort=${
            sort === 'date' ? 'date_added&sort_order=desc' : 'score'
          }&page=1&per_page=24`
        );

        console.log('처음 끝');

        setIsLoading(false);
        setTotalPageNum(res.data.pagination.pages);
        setItemCount(res.data.pagination.items);
        setResult(processResult(res.data.results));
      } catch (error) {
        console.error(error);
      }
    }
    fetchResults();
  }, [searchParams]);

  useEffect(() => {
    if (pageNum === 1) return;

    async function fetchResults() {
      try {
        console.log('추가시작');
        setIsLoading(true);

        const res = await axios.get(url);

        console.log('추가끝');

        setIsLoading(false);
        setTotalPageNum(res.data.pagination.pages);
        setItemCount(res.data.pagination.items);
        setResult([...result, ...processResult(res.data.results)]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchResults();
  }, [pageNum]);

  return useMemo(
    () => (
      <>
        <Header />
        <Main>
          <h1 className="srOnly">Search Result</h1>
          <SearchResultWrapper>
            <SearchResultText resultCount={itemCount} />
            <Dropdown
              content={SORT_CONTENT}
              dropKind="sort"
              label={SORT_LABEL}
            />
            <Dropdown
              content={VIEW_CONTENT}
              dropKind="view"
              label={VIEW_LABEL}
            />
          </SearchResultWrapper>
          <VinylItems
            searchResult={result}
            page={'all'}
            view={params.get('view') as ResultViewProps['view']}
          />
          <div
            ref={observerTarget}
            style={{
              width: '100vw',
              height: '50px',
              marginTop: '20px',
              background:
                'url(/assets/vinyl-spinner.gif) no-repeat center/contain',
            }}
          />
          <GoToTop />
        </Main>
        <Footer />
      </>
    ),
    [itemCount, result, SORT_LABEL, isLoading, observerTarget, params]
  );
}

const SearchResultWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: var(--space-bs);
  min-width: 640px;
  max-width: 828px;
  width: 65vw;
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
