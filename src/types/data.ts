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

export interface ProcessedResult {
  id: number;
  titleInfo: { title: string; artist: string };
  detailInfo: {
    infoName: 'Country' | 'Genre' | 'Label' | 'Style' | 'Released';
    infoContent: string | string[];
    isValid: boolean;
  }[];
  imgUrl: string;
  resourceUrl: string;
}

export interface RawTracklist {
  position: string;
  type_: string;
  title: string;
  duration: string;
}

export interface ProcessedTracklist {
  infoName: 'Tracklist';
  infoContent: RawTracklist[];
  isValid: boolean;
}

export interface CollectionData {
  id: number;
  title: string;
  albums: number[];
}

export interface UserData {
  id: number;
  email: string;
  name: string;
  password: string;
  collections: CollectionData[];
}

export interface PurchaseData {
  date: string;
  price: string;
  state: string;
}
