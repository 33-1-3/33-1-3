import { RawTracklist } from '@/types/data';

const tracklistVaildator = (tracklist: RawTracklist[]) =>
  tracklist.length !== 0 && Array.isArray(tracklist);

export default tracklistVaildator;
