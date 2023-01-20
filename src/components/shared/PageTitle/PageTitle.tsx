import styled from 'styled-components';

export interface PageTitleProps {
  marginTop?: string;
  marginBottom?: string;
  children: string;
}

function PageTitle({ marginTop, marginBottom, children }: PageTitleProps) {
  return (
    <H2 marginTop={marginTop} marginBottom={marginBottom}>
      {children}
    </H2>
  );
}

PageTitle.defaultProps = {
  marginTop: '0px',
  marginBottom: '0px',
};

const H2 = styled.h2<PageTitleProps>`
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
