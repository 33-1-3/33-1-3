import styled from 'styled-components';
import { ImageLink } from '@/common/components';
import { useMemo } from 'react';

export interface FooterProps {
  backgroundColor: string;
  color: string;
}

const StyledFooter = styled.footer<FooterProps>`
  position: relative;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 680px;
  padding: 28px 0;
  margin: 0 auto;
  background-color: ${({ backgroundColor }) => backgroundColor};
  > p {
    color: ${({ color }) => color};
    font-size: var(--text-xs);
    margin-bottom: 8px;
  }
`;

const Adress = styled.span`
  text-decoration: underline;
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 12px;
  height: 36px;
  margin-top: 4px;
  > a:first-child {
    margin-bottom: 7px;
  }
  > a:last-child {
    margin-top: 4px;
  }
`;

const Footer = ({ backgroundColor, color, ...props }: FooterProps) => {
  return useMemo(
    () => (
      <StyledFooter
        style={{ height: 152, width: '100vw' }}
        backgroundColor={backgroundColor}
        color={color}
        {...props}
      >
        <p>Copyright © 2022 33.3 All rights reserved</p>
        <p>
          Contact: &nbsp;&nbsp;
          <Adress>
            <a href="mailto:33.1.3.contact@gmail.com">
              33.1.3.contact@gmail.com
            </a>
          </Adress>
        </p>
        <LinkContainer>
          <ImageLink
            height={32}
            moveToLink={{
              pathname: 'https://github.com/33-1-3',
              site: 'github',
            }}
            width={32}
          />
          <ImageLink
            height={32}
            moveToLink={{
              pathname: 'https://www.discogs.com/ko/',
              site: 'discogs',
            }}
            width={80}
          />
        </LinkContainer>
      </StyledFooter>
    ),
    [backgroundColor, color]
  );
};

Footer.defaultProps = {
  backgroundColor: 'var(--black)',
  color: 'var(--white)',
};

export default Footer;
