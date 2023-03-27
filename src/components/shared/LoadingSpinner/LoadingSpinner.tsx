import styled from 'styled-components';

export interface LoadingSpinnerProps extends SpinnerProps {
  height: string | number;
}

export interface SpinnerProps {
  isLastPage: boolean;
}

function LoadingSpinner({
  isLastPage,
  height = '50px',
  ...props
}: LoadingSpinnerProps) {
  return (
    <Spinner
      isLastPage={isLastPage}
      style={{ width: '100vw', height }}
      {...props}
    />
  );
}

const Spinner = styled.div<SpinnerProps>`
  display: ${({ isLastPage }) => (isLastPage ? 'none' : 'block')};
  background: url(/assets/vinyl-spinner.gif) no-repeat center/contain;
`;

export default LoadingSpinner;
