import styled from 'styled-components';
import lengthToPxStr from '@/utils/functions/lengthToPxStr';

export interface PageTitleProps {
  marginTop?: number | string;
  marginBottom?: number | string;
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
  /* TODO: default props 타입 단언 말고 다른 방법은? */
  margin: ${({ marginTop, marginBottom }) =>
    `${lengthToPxStr(marginTop as number | string)} auto ${lengthToPxStr(
      marginBottom as number | string
    )}`};
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
