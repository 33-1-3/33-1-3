import styled from 'styled-components';
import { memo } from 'react';
import { Link } from 'react-router-dom';

export interface SquareLinkProps extends StyledLinkProps {
  link: string;
  width: string | number;
  height: string | number;
  children: string;
}

export interface StyledLinkProps {
  backgroundColor: string;
  borderColor: string;
  transition: boolean;
  color: string;
  fontSize: string;
}

function SquareLink({
  link,
  width,
  height,
  children,
  backgroundColor,
  color,
  borderColor,
  transition,
  fontSize,
}: SquareLinkProps) {
  return (
    <>
      <Link to={link}>
        <StyledLink
          style={{ width, height }}
          backgroundColor={backgroundColor}
          color={color}
          borderColor={borderColor}
          transition={transition}
          fontSize={fontSize}
        >
          {children}
        </StyledLink>
      </Link>
    </>
  );
}

SquareLink.defaultProps = {
  height: 40,
  backgroundColor: 'var(--purple-900)',
  color: 'var(--white)',
  borderColor: 'var(--purple-900)',
  transition: false,
  fontSize: 'var(--text-md)',
};

export const StyledLink = styled.div<StyledLinkProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 0.3125rem;
  text-decoration: none;
  font-weight: 700;
  font-size: ${({ fontSize }) => fontSize};

  ${({ transition, backgroundColor, color }) => {
    return transition
      ? /*css*/ `
    &:hover,
    &:focus {
    transition: color 0.3s ease-out, background-color 0.3s ease-out;
    color: ${backgroundColor};
    background-color: ${color};
  }`
      : null;
  }}

  &:focus {
    cursor: pointer;
    outline: 0.2em solid hsl(219deg 63% 44%);
    outline-offset: 0.2em;
  }
`;

export default memo(SquareLink);
