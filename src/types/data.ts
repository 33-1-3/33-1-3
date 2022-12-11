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

export interface ProcessResult {
  titleInfo: { title: string; artist: string };
  detailInfo: {
    infoName: 'Country' | 'Genre' | 'Label' | 'Style' | 'Released';
    infoContent: string | string[];
    isValid: boolean;
  }[];
  imgURL: string;
  resourceURL: string;
}
