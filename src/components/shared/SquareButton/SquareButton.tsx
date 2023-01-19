import styled, { css } from 'styled-components';

export interface SquareButtonProps {
  fontSize: number;
  size: 'small' | 'large';
  isFilled?: boolean;
  children: string;
}

const PADDING_VALUE = Object.freeze({ small: '10px 16px', large: '12px 24px' });
const BUTTON_STYLE = Object.freeze({
  isFilled: css`
    background-color: var(--purple-900);
    border: none;
    color: var(--white);
  `,
  isNotFilled: css`
    background-color: var(--white);
    border: 1px solid var(--purple-900);
    color: var(--purple-900);
  `,
  disabled: css`
    background-color: var(--gray-100);
    border: none;
    color: var(--gray-300);
  `,
});

const SquareButton = styled.button<SquareButtonProps>`
  ${({ isFilled }) =>
    isFilled ? BUTTON_STYLE.isFilled : BUTTON_STYLE.isNotFilled}
  width: fit-content;
  padding: ${({ size }) => PADDING_VALUE[size]};
  border-radius: 6px;
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;

  &:disabled {
    ${BUTTON_STYLE.disabled}
    cursor: not-allowed;
  }
`;

SquareButton.defaultProps = Object.freeze({
  fontSize: 20,
  size: 'small',
  isFilled: true,
  children: '버튼',
});

export default SquareButton;
