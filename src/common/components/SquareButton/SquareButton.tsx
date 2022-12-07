import styled from 'styled-components';

export interface SqaureButtonProps {
  fontSize: string;
  isBig: boolean;
  isFilled: boolean;
  children: string;
}

const SqaureButton = styled.button<SqaureButtonProps>`
  padding: ${({ isBig }) => (isBig ? '12px 24px' : '10px 16px')};
  background-color: ${({ isFilled }) =>
    isFilled ? 'var(--purple-900)' : 'var(--white)'};
  border: ${({ isFilled }) =>
    isFilled ? 'none' : '1px solid var(--purple-900)'};
  border-radius: 6px;
  font-family: 'LINESeed';
  font-weight: 700;
  text-align: center;
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ isFilled }) => (isFilled ? 'var(--white)' : 'var(--purple-900)')};
`;

export default SqaureButton;
