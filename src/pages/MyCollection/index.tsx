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
  FloatingButton,
  GoToTop,
  NewDialog,
} from '@/common/components';
import {
  Collection_SORT_CONTENT,
  SORT_LABEL,
  VIEW_CONTENT,
  VIEW_LABEL,
} from '@/utils/constants/dropdown';
import { ResultViewProps } from '@/common/components/AlbumInfo/AlbumInfo';
import styled from 'styled-components';
import axios from 'axios';
import { sortItems } from '@/utils/sortItems';
import { processCommonVinyl } from '@/utils/functions/processResult';
import { ProcessedResult } from '@/types/data';
import {
  userState,
  dialogContentState,
  dialogState,
} from '@/recoil/globalState';
import { useRecoilState } from 'recoil';

let collectionItems: undefined | ProcessedResult[];

export default function MyCollection() {
  const { userid, collectionid } = useParams();
  const [searchParams] = useSearchParams();
  const [result, setResult] = useState<ProcessedResult[]>([]);
  const [collectionTitle, setCollectionTitle] = useState('');
  const [count, setCount] = useState<number>();
  const [searchWord, setSearchWord] = useState<string>();

  const [isLogin, setIsLogin] = useRecoilState(userState);
  const [dialogType, setDialogType] = useRecoilState(dialogState);
  const [dialogContent, setDialogContent] = useRecoilState(dialogContentState);
  // const [isUserCollections, setIsUserCollections] = useState<boolean>(false);

  // const validator = (data: string | Array<string>) => {
  //   if (typeof data === 'string') {
  //     return data !== '';
  //   }
  //   if (Array.isArray(data)) {
  //     return data.length !== 0;
  //   }
  //   return false;
  // };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const matchItems = collectionItems?.filter(
      ({ titleInfo: { title, artist } }) => {
        const regexp = new RegExp(e.target.value, 'i');
        return title.search(regexp) !== -1 || artist.search(regexp) !== -1;
      }
    );
    setResult(matchItems as ProcessedResult[]);
    setCount(matchItems?.length);
    setSearchWord(e.target.value);
  }
  const url = `${import.meta.env.VITE_DB_SERVER}collection/${collectionid}`;

  // useLayoutEffect(() => {
  //   async function checkAuth() {
  //     try {
  //       const res = await axios.get('http://localhost:3313/auth', {
  //         withCredentials: true,
  //       });
  //       const {
  //         data: { isLogin, userId },
  //       } = res;

  //       if (isLogin && userId === userid) {
  //         setIsUserCollections(true);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   checkAuth();
  // }, [isUserCollections]);
  useEffect(() => setDialogType(''), []);

  useEffect(() => {
    async function fetchResults() {
      try {
        const res = await axios.get(url);
        const result = res.data;
        const { vinylsInfo, collectionTitle } = result;

        const processedResult = processCommonVinyl(vinylsInfo);
        setCollectionTitle(collectionTitle);
        setResult(() => {
          collectionItems = processedResult;
          return processedResult;
        });
      } catch (error) {
        console.error(error);
      }
    }
    fetchResults();
  }, [userid, collectionid, dialogType]);

  const [_view, sort] = [searchParams.get('view'), searchParams.get('sort')];
  const view = _view ?? 'block';

  return (
    <>
      <Header />
      <MainWrapper>
        <PageTitle>{collectionTitle}</PageTitle>
        <CenterSearchInput
          page="나의 콜렉션"
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
            content={Collection_SORT_CONTENT}
            dropKind="sort"
            label={SORT_LABEL}
          />
          <Dropdown content={VIEW_CONTENT} dropKind="view" label={VIEW_LABEL} />
        </SearchResultWrapper>
        <VinylItems
          searchResult={sortItems(
            result,
            sort as 'title' | 'artist' | 'count' | 'Released' | 'update'
          )}
          page={'collection'}
          view={view as ResultViewProps['view']}
        />
        <FloatingButton />
        <GoToTop />
      </MainWrapper>
      <Footer />
      <NewDialog
        isOpened={dialogType === 'delete-item'}
        width={480}
        height={200}
        onConfirm={async () => {
          await axios.put(
            `http://localhost:3313/userVinyl/${collectionid}/${dialogContent.releasedId}`
          );
        }}
        onClose={() => setDialogType('')}
      >
        아이템을 삭제하시겠습니까?
      </NewDialog>
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
