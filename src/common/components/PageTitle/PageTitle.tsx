import styled from 'styled-components';

const H2 = styled.h2`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
`;

export interface PageTitleProps {
  children: string;
}

const PageTitle = ({ children, ...props }: PageTitleProps) => {
  return <H2 {...props}>{children}</H2>;
};

export default PageTitle;
