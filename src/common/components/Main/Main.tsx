import styled from 'styled-components';

const StyledMain = styled.main`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  flex: 1;
  width: 100vw;
  height: auto;
  padding-top: 64px;
  padding-bottom: 40px;
`;

const Main = ({ ...props }) => {
  return <StyledMain {...props}></StyledMain>;
};

export default Main;
