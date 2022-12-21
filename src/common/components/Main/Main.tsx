import styled from 'styled-components';

const StyledMain = styled.main`
  position: relative;
  top: 64px;
  left: 0;
  right: 0;
  flex: 1;
  width: 100vw;
  height: auto;
  padding-bottom: 120px;
`;

const Main = ({ ...props }) => {
  return <StyledMain {...props}></StyledMain>;
};

export default Main;
