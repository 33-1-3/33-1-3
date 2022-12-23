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
import { motion } from 'framer-motion';
import { FLOATING_MOTION_VALUE } from '@/utils/constants/motion';
import axios from 'axios';
import { sortItems } from '@/utils/sortItems';
import { processCommonVinyl } from '@/utils/functions/processResult';
import { ProcessedResult } from '@/types/data';
import { dialogContentState, dialogState } from '@/recoil/globalState';
import { useRecoilState } from 'recoil';

let collectionItems: undefined | ProcessedResult[];

export default function MyCollection() {
  const { userid, collectionid } = useParams();
  const [searchParams] = useSearchParams();
  const [result, setResult] = useState<ProcessedResult[]>([]);
  const [collectionTitle, setCollectionTitle] = useState('');
  const [count, setCount] = useState<number>();
  const [searchWord, setSearchWord] = useState<string>();

  const [dialogType, setDialogType] = useRecoilState(dialogState);
  const [dialogContent] = useRecoilState(dialogContentState);

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
  const { initial, animate, transition } = FLOATING_MOTION_VALUE;

  return (
    <>
      <Header />
      <MainWrapper>
        <TitleWrapper>
          <PageTitle style={{ height: '53px' }}>{collectionTitle}</PageTitle>
          <CenterSearchInput
            page="나의 콜렉션"
            placeholder="콜렉션 내에서 검색해 보세요."
            handleSubmit={(e) => {
              e.preventDefault();
            }}
            handleChange={handleChange}
          />
          <SearchResultWrapper>
            {count !== undefined && searchWord !== '' && (
              <SearchResultText searchWord={searchWord} resultCount={count} />
            )}
            {/* <Dropdown
              content={Collection_SORT_CONTENT}
              dropKind="sort"
              label={SORT_LABEL}
            /> */}
            <Dropdown
              content={VIEW_CONTENT}
              dropKind="view"
              label={VIEW_LABEL}
            />
          </SearchResultWrapper>
        </TitleWrapper>
        <motion.div initial={initial} animate={animate} transition={transition}>
          <VinylItems
            searchResult={sortItems(
              result,
              sort as 'title' | 'artist' | 'count' | 'Released' | 'update'
            )}
            page={'collection'}
            view={view as ResultViewProps['view']}
          />
        </motion.div>
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
            `${import.meta.env.VITE_DB_SERVER}userVinyl/${collectionid}/${
              dialogContent.releasedId
            }`
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

const TitleWrapper = styled.div`
  min-width: 680px;
  max-width: 828px;
  width: 65vw;
  margin: 0 auto;
  text-align: center;
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
  min-width: 680px;
  max-width: 828px;
  width: 65vw;
  height: 34px;
  margin: 0 auto;
  margin-top: 36px;

  > div:first-child {
    margin-top: 4px;
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
