export interface BrokenMotionValueType {
  [key: number]: { x: string; y: string; scale: number };
}

export const BROKEN_MOTION_VALUE: BrokenMotionValueType = {
  1: { x: '-5px', y: '-5px', scale: 1 },
  2: { x: '8px', y: '-5px', scale: 1 },
  3: { x: '8px', y: '8px', scale: 1 },
  4: { x: '-12px', y: '16px', scale: 1 },
  5: { x: '-2px', y: '10px', scale: 1 },
};

export const FLOATING_MOTION_VALUE = {
  initial: { y: '30px', opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    duration: 1,
    ease: 'easeOut',
  },
};

export const DROPDOWN_HOVER_VALUE = {
  fastTransition: {
    duration: 0.3,
    ease: 'easeOut',
  },
  changeMauve: {
    backgroundColor: 'var(--purple-100)',
    cursor: 'pointer',
  },
};
