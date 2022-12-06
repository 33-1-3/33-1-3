import PropTypes from 'prop-types';
import { GlobalStyle } from '../../styles/globalStyle';
import styled from 'styled-components';

export interface LinkProps {
  link: string;
  width: string;
  height: string;
  children: string;
  backgroundColor: string;
  color: string;
  border: string;
}

const StyledLink = styled('a')<{ backgroundColor: string; border: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.border};
  border-radius: 0.3125rem;
  text-decoration: none;
  font-weight: 700;
`;

const Link = ({
  link,
  width,
  height,
  children,
  backgroundColor,
  color,
  border,
}: LinkProps) => {
  return (
    <>
      <GlobalStyle />
      <StyledLink
        href={link}
        style={{ width, height }}
        backgroundColor={backgroundColor}
        color={color}
        border={border}
      >
        {children}
      </StyledLink>
    </>
  );
};

Link.propTypes = {
  link: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.string,
};

Link.defaultProps = {
  backgroundColor: 'var(--purple-900)',
  color: 'var(--white)',
  border: 'var(--purple-900)',
};

export default Link;
