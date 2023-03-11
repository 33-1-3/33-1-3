import styled from 'styled-components';
import { LogoLink, WaveFooter, BrokenVinyls } from '@/components';

function NotFound() {
  return (
    <>
      <BrokenVinyls />
      <NotFoundWrapper>
        <Title>404 Not Found</Title>
        <Content>잘못된 URL입니다 ㅠㅠ</Content>
        <LogoLink $width="100px" $height="54px" />
      </NotFoundWrapper>
      <WaveFooter />
    </>
  );
}

const NotFoundWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin: 0 auto;
  margin-top: 428px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
`;

const Content = styled.p`
  margin-bottom: 20px;
  font-size: 24px;
`;

export default NotFound;
