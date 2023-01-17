import styled from 'styled-components';

export interface PageTitleProps {
  children: string;
  [key: string]: unknown;
}

function PageTitle({ children, ...props }: PageTitleProps) {
  return <H2 {...props}>{children}</H2>;
}

const H2 = styled.h2`
  min-width: 680px;
  max-width: 828px;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  text-overflow: ellipsis;
  word-break: break-all;
`;

export default PageTitle;
