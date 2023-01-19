import { memo } from 'react';
import { Link } from 'react-router-dom';

export interface LogoProps {
  width: string | number;
  height: string | number;
}

const LOGO_PATH = '/assets/logo.svg';

const LogoLink = ({ width, height }: LogoProps) => {
  return (
    <Link to="/" aria-label="홈페이지로 이동">
      <img src={LOGO_PATH} alt="" width={width} height={height} />
    </Link>
  );
};

export default memo(LogoLink);
