export interface ViewProps {
  view: 'block' | 'list' | 'detail' | 'myitem';
}

export interface PageProps {
  page: 'all' | 'collection';
}

export interface DetailInfoProps {
  infoName: 'Country' | 'Genre' | 'Label' | 'Style' | 'Released' | 'Tracklist';
  infoContent: string | string[] | RawTracklist[];
  isValid: boolean;
  isMyItem?: boolean;
}
