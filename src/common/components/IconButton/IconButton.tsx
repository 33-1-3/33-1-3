import { ReactComponent as PlusIcon } from '@/assets/plus.svg';
import { ReactComponent as MinusIcon } from '@/assets/minus.svg';
import { ReactComponent as PencilIcon } from '@/assets/pencil.svg';
import styled from 'styled-components';
import { MouseEventHandler } from 'react';

const Icons = {
  plus: PlusIcon,
  minus: MinusIcon,
  pencil: PencilIcon,
};

export interface IconButtonProps {
  width: number | string;
  height: number | string;
  iconType: 'plus' | 'minus' | 'pencil';
  color: string;
  backgroundColor: string;
  isUserCollections: boolean;
  clickHandler: MouseEventHandler<HTMLButtonElement>;
}

export interface IconButtonContainerProps {
  $color: string;
  backgroundColor: string;
}

const IconButtonContainer = styled.button<IconButtonContainerProps>`
  rect {
    fill: ${({ backgroundColor }) => backgroundColor};
    stroke: ${({ $color }) => $color};
  }
  path {
    fill: ${({ $color }) => $color};
    stroke: ${({ $color }) => $color};
  }
  line {
    stroke: ${({ $color }) => $color};
  }
  &:hover,
  &:focus {
    rect {
      transition: 0.3s ease-out;
      fill: ${({ $color }) => $color};
    }
    path {
      transition: 0.3s ease-out;
      fill: ${({ backgroundColor }) => backgroundColor};
      stroke: ${({ backgroundColor }) => backgroundColor};
    }
    line {
      transition: 0.3s ease-out;
      stroke: ${({ backgroundColor }) => backgroundColor};
    }
  }
`;

const IconButton = ({
  width,
  height,
  iconType,
  color,
  backgroundColor,
  isUserCollections,
  clickHandler,
  ...props
}: IconButtonProps) => {
  const IconComponent = Icons[iconType];

  return (
    <>
      {isUserCollections && (iconType === 'minus' || iconType === 'pencil') && (
        <IconButtonContainer
          type="button"
          style={{ width, height }}
          $color={color}
          backgroundColor={backgroundColor}
          onClick={clickHandler}
          {...props}
        >
          <IconComponent width={width} height={height} />
        </IconButtonContainer>
      )}
    </>
  );
};

IconButton.defaultProps = {
  color: 'var(--purple-900)',
  backgroundColor: 'var(--white)',
  isUserCollections: true,
};

export default IconButton;
