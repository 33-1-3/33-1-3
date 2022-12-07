import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface LogoProps {
  width: string;
  height: string;
}

const StyledImg = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const LogoLink = ({ width, height }: LogoProps) => {
  return (
    <Link to="/">
      <StyledImg
        src="/assets/logo.svg"
        alt="Thirty Three Third"
        width={width}
        height={height}
      />
    </Link>
  );
};

export default LogoLink;
