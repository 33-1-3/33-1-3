import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { dialogContentState, dialogState } from '@/recoil/globalState';
import {
  Header,
  Main,
  PageTitle,
  SearchInput,
  Footer,
  Dropdown,
  SearchResultText,
  VinylItems,
  InquiryButton,
  GoToTopButton,
  NewDialog,
} from '@/components';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { absolute, flexContainer } from '@/styles/mixin';
import { processCommonVinyl } from '@/utils/functions/processResult';
import { VIEW_CONTENT, VIEW_LABEL } from '@/utils/constants/dropdown';
import { FLOATING_MOTION_VALUE } from '@/utils/constants/motion';
import { sortItems } from '@/utils/sortItems';
import { ViewProps } from '@/types/render';
import { ProcessedResult } from '@/types/data';

let collectionItems: undefined | ProcessedResult[];

function MyCollection() {
  const { userid, collectionid } = useParams();
  const [searchParams] = useSearchParams();
  const [result, setResult] = useState<ProcessedResult[]>([]);
  const [collectionTitle, setCollectionTitle] = useState('');
  const [count, setCount] = useState<number>();
  const [searchWord, setSearchWord] = useState<string>();

  const [dialogType, setDialogType] = useRecoilState(dialogState);
  const [dialogContent] = useRecoilState(dialogContentState);

  const preventSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

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
          <PageTitle marginTop={'64px'} marginBottom={'32px'}>
            {collectionTitle}
          </PageTitle>
          <CenterSearchInput
            ariaLabel={`${collectionTitle} 내 음반 검색`}
            placeholder="콜렉션 내에서 검색해 보세요."
            onSubmit={preventSubmit}
            onChange={handleChange}
          />
          <SearchResultWrapper>
            {count !== undefined && searchWord !== '' && (
              <SearchResultText searchWord={searchWord} resultCount={count} />
            )}
            {/* <Dropdown
              dropKind="sort"
              label={SORT_LABEL}
              content={COLLECTION_SORT_CONTENT}
            /> */}
            <Dropdown
              dropKind="view"
              label={VIEW_LABEL}
              content={VIEW_CONTENT}
            />
          </SearchResultWrapper>
        </TitleWrapper>
        <motion.div initial={initial} animate={animate} transition={transition}>
          <VinylItems
            searchResults={sortItems(
              result,
              sort as 'title' | 'artist' | 'count' | 'Released' | 'update'
            )}
            page={'collection'}
            view={view as ViewProps['view']}
          />
        </motion.div>
        <InquiryButton />
        <GoToTopButton />
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
  ${flexContainer({ d: 'column', w: 'nowrap', jc: 'flex-start' })}
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
`;

const SearchResultWrapper = styled.div`
  ${flexContainer({
    d: 'row',
    w: 'nowrap',
    ai: 'center',
    g: 'var(--space-bs)',
  })}
  position: relative;
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
    ${absolute({ t: 0, r: 134 })}
  }

  > div:last-child {
    ${absolute({ t: 0, r: 0 })}
  }
`;

export default MyCollection;
