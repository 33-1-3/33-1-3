import styled from 'styled-components';

const StyledMain = styled.main`
  flex: 1;
  padding-top: 64px;
`;

const Main = ({ ...props }) => {
  return <StyledMain {...props}></StyledMain>;
};

export default Main;
