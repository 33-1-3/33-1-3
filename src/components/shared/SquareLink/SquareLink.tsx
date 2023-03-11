import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { widthHeight } from '@/types/style';

export interface StyledLinkPorps extends widthHeight {
  $fontSize?: string;
  $isFilled?: boolean;
  $hasTransition?: boolean;
}

export interface SquareLinkProps extends StyledLinkPorps {
  link: string;
  children: string;
}

function SquareLink({
  link,
  $width,
  $height,
  $fontSize,
  $isFilled = true,
  $hasTransition = false,
  children,
}: SquareLinkProps) {
  return (
    <StyledLink
      to={link}
      $width={$width}
      $height={$height}
      $fontSize={$fontSize}
      $isFilled={$isFilled}
      $hasTransition={$hasTransition}
    >
      {children}
    </StyledLink>
  );
}

const LINK_STYLE = Object.freeze({
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
  isTransition: css`
    &:hover,
    &:focus {
      color: var(--white);
      background-color: var(--purple-900);
      transition: color 0.3s ease-out, background-color 0.3s ease-out;
    }
  `,
});

export const StyledLink = styled(Link)<StyledLinkPorps>`
  ${({ $isFilled }) =>
    $isFilled ? LINK_STYLE.isFilled : LINK_STYLE.isNotFilled};
  width: ${({ $width }) =>
    typeof $width === 'number' ? `${$width}px` : $width};
  height: ${({ $height }) =>
    typeof $height === 'number' ? `${$height}px` : $height};
  border-radius: 0.3125rem;
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  line-height: ${({ $height }) =>
    typeof $height === 'number' ? `${$height}px` : $height};
  ${({ $hasTransition }) => ($hasTransition ? LINK_STYLE.isTransition : null)};

  &:focus {
    outline: 0.2em solid hsl(219deg 63% 44%);
    outline-offset: 0.2em;
  }
`;

export default SquareLink;
