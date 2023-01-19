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
