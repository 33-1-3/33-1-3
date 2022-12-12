import { ProcessedResult } from '@/types/data';

const sortItems = (
  processedResult: ProcessedResult[],
  sort: 'title' | 'artist' | 'count' | 'Released' | 'update'
) => {
  if (sort === 'title' || sort === 'artist') {
    processedResult.sort(({ titleInfo: a }, { titleInfo: b }) => {
      if (a[sort] > b[sort]) return 1;
      if (a[sort] < b[sort]) return -1;
      return 0;
    });
  } else if (sort === 'Released') {
    processedResult.sort(({ detailInfo: a }, { detailInfo: b }) => {
      const releasedA =
        a.find(({ infoName }) => infoName === 'Released')?.infoContent ?? 0;
      const releasedB =
        b.find(({ infoName }) => infoName === 'Released')?.infoContent ?? 0;
      return +releasedB - +releasedA;
    });
  }
  console.log(processedResult);

  // count

  // update

  return processedResult;
};

export { sortItems };
