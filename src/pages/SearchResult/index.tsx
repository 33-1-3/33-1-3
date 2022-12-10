import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Header,
  Main,
  Footer,
  Dropdown,
  SearchResultText,
  VinylItems,
} from '@/common/components';
import { ResultViewProps } from '@/common/components/AlbumInfo/AlbumInfo';
import styled from 'styled-components';
import axios from 'axios';

const SECRET = import.meta.env.VITE_API_SECRET;
const KEY = import.meta.env.VITE_API_KEY;

export interface RawResult {
  country: string;
  year: string;
  format: string[];
  label: string[];
  type: string;
  genre: string[];
  style: string[];
  id: number;
  barcode: string[];
  master_id: number;
  master_url: string;
  uri: string;
  catno: string;
  title: string;
  thumb: string;
  cover_image: string;
  resource_url: string;
  community: string[];
  format_quantity: number;
  formats: string[];
}

export interface ProcessResultProps {
  titleInfo: { title: string; artist: string };
  detailInfo: {
    infoName: 'Country' | 'Genre' | 'Label' | 'Style' | 'Released';
    infoContent: string | string[];
    isValid: boolean;
  }[];
  imgURL: string;
  resourceURL: string;
}

const validator = (data: string | Array<string>) => {
  if (typeof data === 'string') {
    return data !== '';
  }
  if (Array.isArray(data)) {
    return data.length !== 0;
  }
  return false;
};

const processResult = (result: RawResult[]): ProcessResultProps[] =>
  result.map(
    ({
      country,
      cover_image,
      genre,
      label,
      resource_url,
      style,
      title,
      year,
    }: RawResult) => {
      const [artist, albumTitle] = title.split(' - ');

      return {
        titleInfo: { title: albumTitle, artist },
        detailInfo: [
          {
            infoName: 'Released',
            infoContent: year,
            isValid: validator(year),
          },
          {
            infoName: 'Genre',
            infoContent: genre,
            isValid: validator(genre),
          },
          {
            infoName: 'Style',
            infoContent: style,
            isValid: validator(style),
          },
          {
            infoName: 'Country',
            infoContent: country,
            isValid: validator(country),
          },
          {
            infoName: 'Label',
            infoContent: label,
            isValid: validator(label),
          },
        ],
        imgURL: cover_image,
        resourceURL: resource_url,
      };
    }
  );

export default function SearchResult() {
  const [searchParams] = useSearchParams();
  const [itemCount, setItemCount] = useState<number>(0);
  const [result, setResult] = useState<ProcessResultProps[]>([]);

  const params = new URLSearchParams(window.location.search);
  const value = params.get('query');
  const sort = params.get('sort');
  const url = `https://api.discogs.com/database/search?&q=${value}&key=${KEY}&secret=${SECRET}&format=vinyl${
    sort === 'date' ? '&sort=date_added&sort_order=desc' : ''
  }&per_page=24`;

  useEffect(() => {
    async function fetchResults() {
      try {
        const res = await axios.get(url);

        setItemCount(res.data.pagination.items);
        setResult(processResult(res.data.results));
      } catch (error) {
        console.error(error);
      }
    }
    fetchResults();
  }, [searchParams]);

  function getItemPath(isbn: number) {
    return `/item/${isbn}`;
  }

  return (
    <>
      <Header />
      <Main>
        <h1 className="srOnly">Search Result</h1>
        <SearchResultWrapper>
          <SearchResultText resultCount={itemCount} />
          <Dropdown
            content={[
              {
                key: 'default',
                value: '정확도',
              },
              {
                key: 'default',
                value: '정확도',
              },
              {
                key: 'date',
                value: '최신순',
              },
            ]}
            dropKind="sort"
            label="정렬방식 선택"
          />
          <Dropdown
            content={[
              {
                key: 'default',
                value: '보기방식',
              },
              {
                key: 'block',
                value: '블록',
              },
              {
                key: 'list',
                value: '리스트',
              },
            ]}
            dropKind="view"
            label="보기방식 선택"
          />
        </SearchResultWrapper>
        <VinylItems
          searchResult={result}
          page={'all'}
          view={params.get('view') as ResultViewProps['view']}
        />
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
