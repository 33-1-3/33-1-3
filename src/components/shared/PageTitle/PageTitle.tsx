import styled from 'styled-components';

export interface PageTitleProps {
  marginTop?: string;
  marginBottom?: string;
  children: string;
}

function PageTitle({
  marginTop = '0px',
  marginBottom = '0px',
  children,
}: PageTitleProps) {
  return (
    <StyledH2 marginTop={marginTop} marginBottom={marginBottom}>
      {children}
    </StyledH2>
  );
}

const StyledH2 = styled.h2<PageTitleProps>`
  margin: ${({ marginTop, marginBottom }) =>
    `${marginTop} auto ${marginBottom}`};
  min-width: 680px;
  max-width: 828px;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

export default PageTitle;
