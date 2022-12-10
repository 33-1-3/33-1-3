import styled from 'styled-components';
import { ImageLink, MoveLink } from '@/common/components';

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
  align-items: center;
  padding: 40px 0;
  margin: 0 auto;
  background-color: ${({ backgroundColor }) => backgroundColor};
  > p {
    color: ${({ color }) => color};
    font-size: var(--text-xs);
    margin-bottom: 24px;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 24px;
  height: 47px;
  margin-top: 28px;
  > a:first-child {
    margin-bottom: 7px;
  }
  > a:last-child {
    margin-top: 7px;
  }
`;

const Footer = ({ backgroundColor, color, ...props }: FooterProps) => {
  return (
    <StyledFooter
      style={{ height: 200, width: '100vw' }}
      backgroundColor={backgroundColor}
      color={color}
      {...props}
    >
      <p>Copyright © 2022 33-1/3 All rights reserved</p>
      <MoveLink
        color="var(--white)"
        fontSize="var(--text-xs)"
        moveTarget="github"
      />
      <LinkContainer>
        <ImageLink
          height={40}
          moveToLink={{
            pathname: 'https://github.com/33-1-3/33-1-3/issues',
            site: 'github',
          }}
          width={40}
        />
        <ImageLink
          height={40}
          moveToLink={{
            pathname: 'https://www.discogs.com/ko/',
            site: 'discogs',
          }}
          width={108}
        />
      </LinkContainer>
    </StyledFooter>
  );
};

Footer.defaultProps = {
  backgroundColor: 'var(--black)',
  color: 'var(--white)',
};

export default Footer;
