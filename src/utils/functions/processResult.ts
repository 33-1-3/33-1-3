import {
  RawResult,
  ReleaseRawResult,
  MasterRawResult,
  RawTracklist,
  ProcessedResult,
  ProcessedResourceUrlResult,
  RawCommonVinyl,
} from '@/types/data';

const validator = (data: string | Array<string>) => {
  if (typeof data === 'string') {
    return data !== '' && data !== '0';
  }
  if (Array.isArray(data)) {
    return data.length !== 0;
  }
  return false;
};

const getId = (resource_url: string): string => {
  const arr = resource_url.split('/');
  const { length } = arr;
  return arr[length - 2] + '-' + arr[length - 1];
};

const getResourceUrl = (Id: string): string => {
  const _Id = Id.replace('-', '/');
  return 'https://api.discogs.com/' + _Id;
};

// Search API 결과 처리
const processSearchResult = (result: RawResult[]): ProcessedResult[] =>
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
        id: getId(resource_url),
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
        imgUrl: cover_image,
        resourceUrl: resource_url,
      };
    }
  );

const tracklistVaildator = (tracklist: RawTracklist[]) =>
  tracklist.length !== 0 && Array.isArray(tracklist);

// Release API 결과 처리
const processReleaseResult = ({
  country,
  title,
  artists,
  images,
  genres,
  labels: _labels,
  resource_url: resourceUrl,
  styles,
  year: _year,
  released: _released,
  tracklist: _tracklist,
}: ReleaseRawResult): ProcessedResourceUrlResult => {
  const artist = artists[0].name;
  const imgUrl = images && images[0].resource_url;
  const labels = _labels.map(({ name }) => name);
  const tracklist = _tracklist.map(({ position, type_, title, duration }) => ({
    position,
    type_,
    title,
    duration,
  }));
  const released = _released === undefined ? '' : _released;
  const year = released === '' ? _year ?? '' : released;
  
  return {
    id: getId(resourceUrl),
    titleInfo: { title, artist },
    detailInfo: [
      {
        infoName: 'Released',
        infoContent: year,
        isValid: validator(year),
      },
      {
        infoName: 'Genre',
        infoContent: genres,
        isValid: validator(genres),
      },
      {
        infoName: 'Style',
        infoContent: styles,
        isValid: validator(styles),
      },
      {
        infoName: 'Country',
        infoContent: country,
        isValid: validator(country),
      },
      {
        infoName: 'Label',
        infoContent: labels,
        isValid: validator(labels),
      },
    ],
    imgUrl,
    resourceUrl,
    tracklist: {
      infoName: 'Tracklist',
      infoContent: tracklist,
      isValid: tracklistVaildator(tracklist),
    },
  };
};

// Release API 결과 commonVinyl 형식
const commonRelease = ({
  title,
  artists,
  images,
  genres: genre,
  resource_url,
  year: _year,
  released: _released,
}: ReleaseRawResult): RawCommonVinyl => {
  const artist = artists[0].name;
  const imgUrl = images && images[0].resource_url;
  const released = _released === undefined ? '' : _released;
  const year = released === '' ? _year ?? '' : released;

  return {
    id: getId(resource_url),
    title,
    artist,
    genre,
    year,
    imgUrl,
    resourceUrl: resource_url,
  };
};

// Master API 결과 처리
const processMasterResult = ({
  country: _country,
  title,
  artists,
  images,
  genres,
  labels: _labels,
  resource_url: resourceUrl,
  styles,
  year: _year,
  tracklist: _tracklist,
}: MasterRawResult): ProcessedResourceUrlResult => {
  const country = _country ?? '';
  const artist = artists[0].name;
  const imgUrl = images && images[0].resource_url;
  const year = _year ?? '';
  const labels = _labels?.map(({ name }) => name) ?? [];
  const tracklist = _tracklist.map(({ position, type_, title, duration }) => ({
    position,
    type_,
    title,
    duration,
  }));

  return {
    id: getId(resourceUrl),
    titleInfo: { title, artist },
    detailInfo: [
      {
        infoName: 'Released',
        infoContent: year,
        isValid: validator(year),
      },
      {
        infoName: 'Genre',
        infoContent: genres,
        isValid: validator(genres),
      },
      {
        infoName: 'Style',
        infoContent: styles,
        isValid: validator(styles),
      },
      {
        infoName: 'Country',
        infoContent: country,
        isValid: validator(country),
      },
      {
        infoName: 'Label',
        infoContent: labels,
        isValid: validator(labels),
      },
    ],
    imgUrl,
    resourceUrl: resourceUrl,
    tracklist: {
      infoName: 'Tracklist',
      infoContent: tracklist,
      isValid: tracklistVaildator(tracklist),
    },
  };
};

// Master API 결과 commonVinyl 형식
const commonMaster = ({
  title,
  artists,
  images,
  genres: genre,
  resource_url,
  year: _year,
}: MasterRawResult): RawCommonVinyl => {
  const artist = artists[0].name;
  const imgUrl = images[0].resource_url;
  const year = _year ?? '';
  return {
    id: getId(resource_url),
    title,
    artist,
    genre,
    year,
    imgUrl,
    resourceUrl: resource_url,
  };
};

// commonVinyl 처리(렌더링 형식)
const processCommonVinyl = (result: RawCommonVinyl[]): ProcessedResult[] => {
  return result.map(
    ({ id, title, artist, genre, year, imgUrl, resourceUrl }) => ({
      id,
      titleInfo: { title, artist },
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
      ],
      imgUrl,
      resourceUrl,
    })
  );
};

export {
  processSearchResult,
  processReleaseResult,
  processMasterResult,
  processCommonVinyl,
  commonRelease,
  commonMaster,
  getId,
  getResourceUrl,
};
