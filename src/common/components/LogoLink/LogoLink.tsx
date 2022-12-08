import { Link } from 'react-router-dom';

export interface LogoProps {
  width: string | number;
  height: string | number;
}

const LogoLink = ({ width, height }: LogoProps) => {
  return (
    <Link to="/" aria-label="메인 화면으로 이동">
      <img
        src="/assets/logo.svg"
        alt="Thirty Three Third"
        width={width}
        height={height}
      />
    </Link>
  );
};

export default LogoLink;
