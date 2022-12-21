import styled from 'styled-components';

export interface LoadingSpinnerProps {
  isLastPage: boolean;
}

export default function LoadingSpinner({ isLastPage }: LoadingSpinnerProps) {
  return <Spinner isLastPage={isLastPage} />;
}

const Spinner = styled.div<LoadingSpinnerProps>`
  display: ${({ isLastPage }) => (isLastPage ? 'none' : 'block')};
  width: 100vw;
  height: 50px;
  background: url(/assets/vinyl-spinner.gif) no-repeat center/contain;
`;
