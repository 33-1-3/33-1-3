import styled from 'styled-components';
import { ReactComponent as PlusIcon } from '@/assets/plus-circle.svg';

export interface AddCollectionButtonProps {
  size: 'small' | 'large';
  color: string;
  backgroundColor: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface DashButtonProps {
  size: 'small' | 'large';
  $color: string;
  backgroundColor: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const buttonStyle = {
  small: {
    width: '408px',
    height: '48px',
    gap: 'var(--space-sm)',
    fontSize: 'var(--text-bs)',
  },
  large: {
    width: '640px',
    height: '160px',
    gap: 'var(--space-xl)',
    fontSize: 'var(--text-xl)',
  },
};

const DashButton = styled.button<DashButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ size }) => buttonStyle[size].gap};

  border: 1px dashed ${({ $color }) => $color};
  border-radius: 4px;
  color: ${({ $color }) => $color};
  font-size: ${({ size }) => buttonStyle[size].fontSize};

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
    background-color: ${({ $color }) => $color};
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

const AddCollectionButton = ({
  size,
  color,
  backgroundColor,
  onClick,
  ...args
}: AddCollectionButtonProps) => {
  const { width, height } = buttonStyle[size];
  return (
    <DashButton
      type="button"
      style={{ width, height }}
      size={size}
      $color={color}
      backgroundColor={backgroundColor}
      onClick={onClick}
      {...args}
    >
      <PlusIcon />
      <span>Add a Collection</span>
    </DashButton>
  );
};

AddCollectionButton.defaultProps = {
  color: 'var(--purple-900)',
  backgroundColor: 'var(--white)',
};

export default AddCollectionButton;
