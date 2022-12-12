import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import {
  Header,
  Main,
  PageTitle,
  SearchInput,
  Footer,
  Dropdown,
  SearchResultText,
  VinylItems,
} from '@/common/components';
import { ResultViewProps } from '@/common/components/AlbumInfo/AlbumInfo';
import { mockUsersData } from '@/utils/mockInfo';
import styled from 'styled-components';
import axios from 'axios';
import { sortItems } from '@/utils/sortItems';

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

let collectionItems: undefined | ProcessResultProps[];

export default function MyCollection() {
  const { userid, collectionid } = useParams();
  const [searchParams, _] = useSearchParams();
  // const [itemCount, setItemCount] = useState<number>(0);
  const [result, setResult] = useState<ProcessResultProps[]>([]);
  const [count, setCount] = useState<number>();
  const [searchWord, setSearchWord] = useState<string>();
  const { collections } = mockUsersData.find(({ id }) => id === +userid);
  const { title, albums } = collections.find(({ id }) => id === +collectionid);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const matchItems = collectionItems?.filter(
      ({ titleInfo: { title, artist } }) => {
        const regexp = new RegExp(e.target.value, 'i');
        return title.search(regexp) !== -1 || artist.search(regexp) !== -1;
      }
    );
    setResult(matchItems as ProcessResultProps[]);
    setCount(matchItems?.length);
    setSearchWord(e.target.value);
  }

  useEffect(() => {
    async function fetchResults() {
      try {
        const dataRes = await Promise.all(
          albums.map((release_id: number) => {
            const url = `https://api.discogs.com/database/search?&release_id=${release_id}&key=${KEY}&secret=${SECRET}`;
            // const url = `https://api.discogs.com/database/search?&release_id=${release_id}&key=aaDvoScQTvvqyWzyQfvj&secret=FhkTdZaKNGjEscpVfZAQMhMOAXrcjgLr`;
            return axios.get(url);
          })
        );
        const datas = dataRes.map(
          ({ data: { results } }: { data: { results: RawResult[] } }) => {
            return results[0];
          }
        );

        setResult(() => {
          collectionItems = sortItems(
            processResult(datas),
            searchParams.get('sort') as
              | 'title'
              | 'artist'
              | 'count'
              | 'Released'
              | 'update'
          );
          return collectionItems;
        });
      } catch (error) {
        console.error(error);
      }
    }

    fetchResults();
  }, [userid, collectionid]);

  const [_view, sort] = [searchParams.get('view'), searchParams.get('sort')];
  const view = _view ?? 'block';

  return (
    <>
      <Header />
      <MainWrapper>
        <PageTitle>{title}</PageTitle>
        <CenterSearchInput
          page="리스트"
          handleSubmit={(e) => {
            e.preventDefault();
          }}
          handleChange={handleChange}
        />
        <SearchResultWrapper>
          {count !== undefined && searchWord !== '' && (
            <SearchResultText searchWord={searchWord} resultCount={count} />
          )}
          <Dropdown
            content={[
              {
                key: 'default',
                value: '정렬 방식',
              },
              {
                key: 'title',
                value: '앨범 제목 순',
              },
              {
                key: 'artist',
                value: '가수 이름 순',
              },
              {
                key: 'count',
                value: '소장 개수 순',
              },
              {
                key: 'Released',
                value: '발매일 순',
              },
              {
                key: 'update',
                value: '업데이트 순',
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
          searchResult={sortItems(
            result,
            sort as 'title' | 'artist' | 'count' | 'Released' | 'update'
          )}
          page={'all'}
          view={view as ResultViewProps['view']}
        />
      </MainWrapper>
      <Footer />
    </>
  );
}

const MainWrapper = styled(Main)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  margin-top: 56px;
`;

const CenterSearchInput = styled(SearchInput)`
  width: fit-content;
  align-self: center;
  margin-top: var(--space-xxl);
`;

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

  > div:nth-last-of-type(2) {
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
