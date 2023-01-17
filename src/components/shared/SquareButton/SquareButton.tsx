import styled from 'styled-components';

const PADDING_VALUE = { small: '10px 16px', large: '12px 24px' };

export interface SquareButtonProps {
  fontSize: number;
  size: 'small' | 'large';
  isFilled?: boolean;
  children: string;
}

const SquareButton = styled.button<SquareButtonProps>`
  padding: ${({ size }) => PADDING_VALUE[size]};
  background-color: ${({ isFilled }) =>
    isFilled ? 'var(--purple-900)' : 'var(--white)'};
  border: ${({ isFilled }) =>
    isFilled ? 'none' : '1px solid var(--purple-900)'};
  border-radius: 6px;
  font-weight: 700;
  text-align: center;
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ isFilled }) => (isFilled ? 'var(--white)' : 'var(--purple-900)')};
  cursor: pointer;

  &:disabled {
    background-color: var(--gray-100);
    border: none;
    color: var(--gray-300);
    cursor: not-allowed;
  }
`;

SquareButton.defaultProps = {
  fontSize: 20,
  size: 'small',
  isFilled: true,
  children: '버튼',
};

export default SquareButton;
