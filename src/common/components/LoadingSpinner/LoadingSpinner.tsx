import styled from 'styled-components';

export interface LoadingSpinnerProps {
  isLastPage: boolean;
  height: string;
}

export default function LoadingSpinner({
  isLastPage,
  height,
}: LoadingSpinnerProps) {
  return <Spinner isLastPage={isLastPage} height={height} />;
}

const Spinner = styled.div<LoadingSpinnerProps>`
  display: ${({ isLastPage }) => (isLastPage ? 'none' : 'block')};
  width: 100vw;
  height: 50px;
  background: url(/assets/vinyl-spinner.gif) no-repeat center/contain;
`;

LoadingSpinner.defaultProps = {
  height: '50px',
};
