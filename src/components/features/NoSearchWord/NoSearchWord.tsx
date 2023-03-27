import { useState, useEffect } from 'react';
import axios from 'axios';
import { LoadingSpinner, VinylItems } from '@/components';
import styled from 'styled-components';
import { processSearchResult } from '@/utils/functions/processResult';
import { ProcessedResult } from '@/types/data';

const SECRET = import.meta.env.VITE_API_SECRET;
const KEY = import.meta.env.VITE_API_KEY;

const LP_RECOMMENDATION_URL = Object.freeze({
  chaerin: `https://api.discogs.com/database/search?&q="꽃갈피"&key=${KEY}&secret=${SECRET}&format=vinyl`,
  hyunjung: `https://api.discogs.com/database/search?&q="To Let A Good Thing Die"&key=${KEY}&secret=${SECRET}&format=vinyl`,
  minseok: `https://api.discogs.com/database/search?&q="every letter i sent you"&key=${KEY}&secret=${SECRET}&format=vinyl`,
  younha: `https://api.discogs.com/database/search?&q="연어 Vol. 3"&key=${KEY}&secret=${SECRET}&format=vinyl`,
});

function NoSearchWord() {
  const [result, setResult] = useState<ProcessedResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchResults = async () => {
      setIsLoading(true);

      try {
        const [res_chaerin, res_hyunjung, res_minseok, res_younha] =
          await Promise.all([
            axios.get(LP_RECOMMENDATION_URL.chaerin),
            axios.get(LP_RECOMMENDATION_URL.hyunjung),
            axios.get(LP_RECOMMENDATION_URL.minseok),
            axios.get(LP_RECOMMENDATION_URL.younha),
          ]);

        setIsLoading(false);
        setResult(
          processSearchResult([
            res_chaerin.data.results[0],
            res_hyunjung.data.results[0],
            res_minseok.data.results[0],
            res_younha.data.results[0],
          ])
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchResults();
  }, []);

  return (
    <>
      <NoSearchWordGuideText>{`검색어를 입력하지 않았어요 : (`}</NoSearchWordGuideText>
      <RecommendationGuideText>
        33.3 개발자들이 추천하는 LP는 어떠세요?
      </RecommendationGuideText>
      {isLoading ? (
        <StyledLoadingSpinner isLastPage={false} height="100px" />
      ) : (
        <VinylItems searchResults={result} page="all" view="block" />
      )}
    </>
  );
}

const NoSearchWordGuideText = styled.p`
  min-width: 680px;
  margin-top: 64px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

const RecommendationGuideText = styled.p`
  min-width: 680px;
  margin-top: var(--space-md);
  text-align: center;
  font-size: var(--text-md);
`;

const StyledLoadingSpinner = styled(LoadingSpinner)`
  margin-top: 60px;
`;

export default NoSearchWord;
