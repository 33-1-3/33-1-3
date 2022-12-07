import styled from 'styled-components';

const paddingValue = { small: '10px 16px', large: '12px 24px' };

export interface SqaureButtonProps {
  fontSize: number;
  size: 'small' | 'large';
  isFilled: boolean;
  children: string;
}

const SqaureButton = styled.button<SqaureButtonProps>`
  padding: ${({ size }) => paddingValue[size]};
  background-color: ${({ isFilled }) =>
    isFilled ? 'var(--purple-900)' : 'var(--white)'};
  border: ${({ isFilled }) =>
    isFilled ? 'none' : '1px solid var(--purple-900)'};
  border-radius: 6px;
  font-family: 'LINESeed';
  font-weight: 700;
  text-align: center;
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ isFilled }) => (isFilled ? 'var(--white)' : 'var(--purple-900)')};
`;

SqaureButton.defaultProps = {
  fontSize: 20,
  size: 'small',
  isFilled: true,
  children: '버튼',
};

export default SqaureButton;
