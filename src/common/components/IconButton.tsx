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
}

const IconButton = ({ width, height, iconType }: IconButtonProps) => {
  const ButtonStyle = { width, height };
  const IconStyle = {
    width,
    height,
  };

  const IconComponent = Icons[iconType];

  const StyledIconComponent = styled(IconComponent)`
    rect {
      fill: var(--white);
      stroke: var(--purple-900);
    }
    path {
      fill: var(--purple-900);
      stroke: var(--purple-900);
    }
    line {
      stroke: var(--purple-900);
    }
    &:hover,
    &:focus {
      rect {
        transition: 0.3s ease-out;
        fill: var(--purple-900);
      }
      path {
        transition: 0.3s ease-out;
        fill: var(--white);
        stroke: var(--white);
      }
      line {
        transition: 0.3s ease-out;
        stroke: var(--white);
      }
    }
  `;

  return (
    <button style={ButtonStyle} type="button">
      <StyledIconComponent style={IconStyle} />
    </button>
  );
};

IconButton.defaultProps = {
  width: 16,
  height: 16,
};

export default IconButton;
