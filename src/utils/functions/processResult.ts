import { RawResult, ProcessedResult } from '@/types/data';

const validator = (data: string | Array<string>) => {
  if (typeof data === 'string') {
    return data !== '';
  }
  if (Array.isArray(data)) {
    return data.length !== 0;
  }
  return false;
};

const processResult = (result: RawResult[]): ProcessedResult[] =>
  result.map(
    ({
      id,
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
        id: id,
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

export default processResult;
