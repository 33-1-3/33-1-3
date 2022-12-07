import { ReactComponent as PlusIcon } from '@/assets/plus.svg';
import { ReactComponent as MinusIcon } from '@/assets/minus.svg';
import { ReactComponent as PencilIcon } from '@/assets/pencil.svg';
import styled from 'styled-components';

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
}

const IconButton = ({
  width,
  height,
  iconType,
  color,
  backgroundColor,
  ...props
}: IconButtonProps) => {
  const ButtonStyle = { width, height };
  const IconStyle = {
    width,
    height,
  };

  const IconComponent = Icons[iconType];

  const StyledIconComponent = styled(IconComponent)`
    rect {
      fill: ${backgroundColor};
      stroke: ${color};
    }
    path {
      fill: ${color};
      stroke: ${color};
    }
    line {
      stroke: ${color};
    }
    &:hover,
    &:focus {
      rect {
        transition: 0.3s ease-out;
        fill: ${color};
      }
      path {
        transition: 0.3s ease-out;
        fill: ${backgroundColor};
        stroke: ${backgroundColor};
      }
      line {
        transition: 0.3s ease-out;
        stroke: ${backgroundColor};
      }
    }
  `;

  return (
    <button style={ButtonStyle} type="button" {...props}>
      <StyledIconComponent style={IconStyle} />
    </button>
  );
};

IconButton.defaultProps = {
  color: 'var(--purple-900)',
  backgroundColor: 'var(--white)',
};

export default IconButton;
