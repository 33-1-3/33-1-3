import { Link } from 'react-router-dom';
import { memo } from 'react';

export interface LogoProps {
  width: string | number;
  height: string | number;
}

function LogoLink({ width, height, ...args }: LogoProps) {
  return (
    <Link to="/" aria-label="메인 화면으로 이동">
      <img
        src="/assets/logo.svg"
        alt="Thirty Three Third"
        width={width}
        height={height}
        {...args}
      />
    </Link>
  );
}

export default memo(LogoLink);
