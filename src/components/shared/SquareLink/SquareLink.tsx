import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export interface StyledLinkPorps {
  $fontSize?: number;
  $isFilled?: boolean;
  $isTransition?: boolean;
}

export interface SquareLinkProps extends StyledLinkPorps {
  link: string;
  children: string;
}

function SquareLink({
  link,
  $fontSize,
  $isFilled,
  $isTransition,
  children,
}: SquareLinkProps) {
  return (
    <StyledLink
      to={link}
      $fontSize={$fontSize}
      $isFilled={$isFilled}
      $isTransition={$isTransition}
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
    $isFilled ? LINK_STYLE.isFilled : LINK_STYLE.isNotFilled}
  width: fit-content;
  padding: ${({ $fontSize }) =>
    `${($fontSize as number) * 0.35}px ${($fontSize as number) * 0.8}px`};
  border-radius: 0.3125rem;
  font-size: ${({ $fontSize }) => $fontSize}px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;

  ${({ $isTransition }) => ($isTransition ? LINK_STYLE.isTransition : null)};

  &:focus {
    cursor: pointer;
    outline: 0.2em solid hsl(219deg 63% 44%);
    outline-offset: 0.2em;
  }
`;

SquareLink.defaultProps = Object.freeze({
  $fontSize: 20,
  $isFilled: true,
  $isTransition: false,
});

export default memo(SquareLink);
