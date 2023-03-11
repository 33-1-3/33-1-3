import styled, { css } from 'styled-components';
import { widthHeight } from '@/types/style';

export interface SquareButtonProps extends widthHeight {
  $fontSize: string;
  isFilled?: boolean;
  disabled?: boolean;
  children: string;
}

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
    isFilled ? BUTTON_STYLE.isFilled : BUTTON_STYLE.isNotFilled};
  width: ${({ $width }) =>
    typeof $width === 'number' ? `${$width}px` : $width};
  height: ${({ $height }) =>
    typeof $height === 'number' ? `${$height}px` : $height};
  border-radius: 6px;
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: 700;
  text-align: center;

  &:disabled {
    ${BUTTON_STYLE.disabled}
    cursor: not-allowed;
  }
`;

SquareButton.defaultProps = Object.freeze({
  isFilled: true,
  diabled: false,
});

export default SquareButton;
