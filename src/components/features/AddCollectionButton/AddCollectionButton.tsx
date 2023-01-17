import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ReactComponent as PlusIcon } from '@/assets/plus-circle.svg';
import {
  SMALL_BORDER_IMG,
  LARGE_BORDER_IMG,
} from '@/utils/constants/addCollectionButtonUrl';

export interface AddCollectionButtonProps {
  size: 'small' | 'large';
  $color?: string;
  backgroundColor?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function AddCollectionButton({
  size,
  $color,
  backgroundColor,
  onClick,
  ...args
}: AddCollectionButtonProps) {
  const { width, height } = BUTTON_STYLE[size];

  return (
    <DashButton
      type="button"
      style={{ width, height }}
      size={size}
      $color={$color}
      backgroundColor={backgroundColor}
      onClick={onClick}
      whileHover={{ backgroundColor: 'var(--purple-900)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      {...args}
    >
      <PlusIcon
        width={BUTTON_STYLE[size].iconSize}
        height={BUTTON_STYLE[size].iconSize}
      />
      <span>New Collection</span>
    </DashButton>
  );
}

AddCollectionButton.defaultProps = {
  $color: 'var(--purple-900)',
  backgroundColor: 'var(--white)',
};

const BUTTON_STYLE = {
  small: {
    width: '432px',
    height: '48px',
    gap: 'var(--space-sm)',
    fontSize: 'var(--text-bs)',
    iconSize: 16,
  },
  large: {
    width: '520px',
    height: '130px',
    gap: 'var(--space-bs)',
    fontSize: 'var(--text-lg)',
    iconSize: 28,
  },
};

const DashButton = styled(motion.button)<AddCollectionButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ size }) => BUTTON_STYLE[size].gap};

  color: ${({ $color }) => $color};
  font-size: ${({ size }) => BUTTON_STYLE[size].fontSize};
  font-weight: ${({ size }) => (size === 'small' ? '400' : '700')};

  background-image: ${({ size }) =>
    size === 'small' ? SMALL_BORDER_IMG : LARGE_BORDER_IMG};
  border-radius: ${({ size }) => (size === 'small' ? '4px' : '8px')};

  circle {
    fill: ${({ $color }) => $color};
  }

  path {
    fill: ${({ backgroundColor }) => backgroundColor};
    stroke: ${({ backgroundColor }) => backgroundColor};
  }

  span {
    transform: translateY(2px);
  }

  :hover {
    color: ${({ backgroundColor }) => backgroundColor};
    circle {
      fill: ${({ backgroundColor }) => backgroundColor};
    }
    path {
      fill: ${({ $color }) => $color};
      stroke: ${({ $color }) => $color};
    }
  }
`;

export default AddCollectionButton;
