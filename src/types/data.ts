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

interface ReleaseCompany {
  name: string;
  catno: string;
  entity_type: string;
  entity_type_name: string;
  id: number;
  resource_url: string;
}

interface ReleasePerson {
  username: string;
  resource_url: string;
}

interface ReleaseIdentifier {
  type: string;
  value: string;
  description: string;
}

interface Video {
  uri: string;
  title: string;
  description: string;
  duration: number;
  embed: boolean;
}

interface Artist {
  name: string;
  anv: string;
  join: string;
  role: string;
  tracks: string;
  id: number;
  resource_usl: string;
}

export interface Tracklist {
  position: string;
  type_: string;
  title: string;
  duration: string;
  extraartists?: Artist[];
}

interface Image {
  type: string;
  uri: string;
  resource_url: string;
  uri150: string;
  width: number;
  height: number;
}

export interface ReleaseRawResult {
  id: number;
  resource_url: string;
  title: string;
  artists: Artist[];
  images: Image[];
  genres: string[];
  styles: string[];
  country: string;
  labels: ReleaseCompany[];
  released?: string;
  year?: string;
  tracklist: Tracklist[];

  status?: string;
  uri?: string;
  artists_sort?: string;
  series?: ReleaseCompany[];
  companies?: ReleaseCompany[];
  formats?: {
    name: string;
    qty: string;
    text: string;
    descriptions: string[];
  }[];
  data_quality?: string;
  community?: {
    have: number;
    want: number;
    rating: { count: number; average: number };
    submitter: ReleasePerson;
    contributors: ReleasePerson[];
    data_quality: string;
    status: string;
  };
  format_quantity?: number;
  date_added?: string;
  date_changed?: string;
  num_for_sale?: number;
  lowest_price?: number;
  master_id?: number;
  master_url?: string;
  notes?: string;
  released_formatted?: string;
  identifiers?: ReleaseIdentifier[];
  videos?: Video[];
  extraartists?: Artist[];
  thumb?: string;
  estimated_weight?: number;
  blocked_from_sale?: boolean;
}

export interface MasterRawResult {
  id: number;
  resource_url: string;
  title: string;
  artists: Artist[];
  images: Image[];
  genres: string[];
  styles: string[];
  country?: string;
  labels?: ReleaseCompany[];
  year?: string;
  tracklist: Tracklist[];

  main_release?: number;
  most_recent_release?: number;
  uri?: string;
  versions_url?: string;
  main_release_url?: string;
  most_recent_release_url?: string;
  num_for_sale?: number;
  lowest_price?: number;
  notes?: string;
  data_quality?: string;
  videos?: Video[];
}

export interface ProcessedResult {
  id: number | string;
  titleInfo: { title: string; artist: string };
  detailInfo: {
    infoName: 'Country' | 'Genre' | 'Label' | 'Style' | 'Released';
    infoContent: string | string[];
    isValid: boolean;
  }[];
  imgUrl: string;
  resourceUrl: string;
}

export interface ProcessedResourceUrlResult {
  id: string;
  titleInfo: { title: string; artist: string };
  detailInfo: {
    infoName: 'Country' | 'Genre' | 'Label' | 'Style' | 'Released';
    infoContent: string | string[];
    isValid: boolean;
  }[];
  imgUrl: string;
  resourceUrl: string;
  tracklist: ProcessedTracklist;
}

export interface RawTracklist {
  position: string;
  type_: string;
  title: string;
  duration: string;
}

export interface ProcessedTracklist {
  infoName: 'Tracklist';
  infoContent: Tracklist[];
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
