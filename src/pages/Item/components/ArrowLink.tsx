import { ReactComponent as ArrowIcon } from '@/assets/arrow.svg';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export interface IconProps {
  width: string;
  height: string;
  color: string;
  backgroundColor: string;
}

const StyledArrowIcon = styled(ArrowIcon)<IconProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${({ color }) => color};
  backgroundcolor: ${({ backgroundColor }) => backgroundColor};
  path {
    fill: ${({ color }) => color};
    stroke: ${({ color }) => color};
  }
  circle {
    fill: ${({ backgroundColor }) => backgroundColor};
  }
`;

const ArrowLink = ({
  width,
  height,
  color,
  backgroundColor,
  ...props
}: IconProps) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} {...props}>
      <StyledArrowIcon
        width={width}
        height={height}
        color={color}
        backgroundColor={backgroundColor}
      />
    </button>
  );
};

ArrowLink.defaultProps = {
  width: '60px',
  height: '60px',
  color: 'var(--white)',
  backgroundColor: 'var(--purple-900)',
};

export default ArrowLink;
