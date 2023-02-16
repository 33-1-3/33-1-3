// import { widthHeight } from '@/types/style';

const widthHeightToPx = (widthHeight: number | string) =>
  typeof widthHeight === 'number' ? widthHeight + 'px' : widthHeight;

export default widthHeightToPx;
