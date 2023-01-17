import styled from 'styled-components';

export interface LoadingSpinnerProps extends SpinnerProps {
  height: string | number;
}

export interface SpinnerProps {
  isLastPage: boolean;
}

function LoadingSpinner({ isLastPage, height }: LoadingSpinnerProps) {
  return <Spinner isLastPage={isLastPage} style={{ width: '100vw', height }} />;
}

LoadingSpinner.defaultProps = {
  height: '50px',
};

const Spinner = styled.div<SpinnerProps>`
  display: ${({ isLastPage }) => (isLastPage ? 'none' : 'block')};
  background: url(/assets/vinyl-spinner.gif) no-repeat center/contain;
`;

export default LoadingSpinner;
