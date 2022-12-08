import { ReactComponent as ArrowIcon } from '@/assets/arrow.svg';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export interface IconProps {
  $width: string;
  $height: string;
  $color: string;
  $backgroundcolor: string;
}

export interface LinkProps {
  width: string;
  height: string;
  color: string;
  backgroundcolor: string;
}

const StyledArrowIcon = styled(ArrowIcon)<IconProps>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  path {
    fill: ${({ $color }) => $color};
    stroke: ${({ $color }) => $color};
  }
  circle {
    fill: ${({ $backgroundcolor }) => $backgroundcolor};
  }
`;

const ArrowLink = ({
  width,
  height,
  color,
  backgroundcolor,
  ...props
}: LinkProps) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} {...props}>
      <StyledArrowIcon
        $width={width}
        $height={height}
        $color={color}
        $backgroundcolor={backgroundcolor}
      />
    </button>
  );
};

ArrowLink.defaultProps = {
  width: '60px',
  height: '60px',
  color: 'var(--white)',
  backgroundcolor: 'var(--purple-900)',
};

export default ArrowLink;
