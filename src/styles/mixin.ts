import { css } from 'styled-components';

interface AbsoluteArgs {
  t?: number | string;
  b?: number | string;
  l?: number | string;
  r?: number | string;
}

interface FlexContainerArgs {
  d?: string;
  w?: string;
  ai?: string;
  jc?: string;
  g?: number | string;
}

interface GridContainerArgs {
  gtr?: string;
  gtc?: string;
  rg?: string;
  cg?: string;
}

export const absolute = ({ t, b, l, r }: AbsoluteArgs) => `
  position: absolute;
  top: ${typeof t === 'string' ? t : t && t + 'px'};
  bottom: ${typeof b === 'string' ? b : b && b + 'px'};
  left: ${typeof l === 'string' ? l : l && l + 'px'};
  right: ${typeof r === 'string' ? r : r && r + 'px'};
`;

export const flexContainer = ({ d, w, ai, jc, g }: FlexContainerArgs) => `
  display: flex;
  flex-direction: ${d};
  flex-wrap: ${w};
  align-items: ${ai};
  justify-content: ${jc};
  gap: ${typeof g === 'string' ? g : g && g + 'px'};
`;

export const gridContainer = ({ gtr, gtc, rg, cg }: GridContainerArgs) => `
  display: grid;
  grid-template-rows: ${gtr};
  grid-template-columns: ${gtc};
  row-gap: ${rg};
  column-gap: ${cg};
`;

export const textEllipsis = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;
