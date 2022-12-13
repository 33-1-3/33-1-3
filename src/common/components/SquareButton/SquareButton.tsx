import styled from 'styled-components';

const PADDING_VALUE = { small: '10px 16px', large: '12px 24px' };

export interface SqaureButtonProps {
  fontSize: number;
  size: 'small' | 'large';
  isFilled?: boolean;
  disabled?: boolean;
  children: string;
}

const SqaureButton = styled.button<SqaureButtonProps>`
  padding: ${({ size }) => PADDING_VALUE[size]};
  background-color: ${({ disabled, isFilled }) => {
    if (disabled) {
      return 'var(--gray-100)';
    } else {
      return isFilled ? 'var(--purple-900)' : 'var(--white)';
    }
  }};
  border: ${({ disabled, isFilled }) => {
    if (disabled) {
      return 'none';
    } else {
      return isFilled ? 'none' : '1px solid var(--purple-900)';
    }
  }};
  border-radius: 6px;
  font-weight: 700;
  text-align: center;
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ disabled, isFilled }) => {
    if (disabled) {
      return 'var(--gray-300)';
    } else {
      return isFilled ? 'var(--white)' : 'var(--purple-900)';
    }
  }};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

SqaureButton.defaultProps = {
  fontSize: 20,
  size: 'small',
  isFilled: true,
  disabled: false,
  children: '버튼',
};

export default SqaureButton;
