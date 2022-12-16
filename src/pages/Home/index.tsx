import styled from 'styled-components';
import { Header, SearchInput, Footer, Main } from '@/common/components';
import useHandleSubmit from './../../hooks/useHandleSubmit';

export default function Home() {
  return (
    <>
      <Header />
      <StyledMain>
        <Catchphrase style={{ fontSize: '2rem' }}>
          Record your <HighLight>Records!</HighLight>
        </Catchphrase>
        <SearchInput handleSubmit={useHandleSubmit()} />
      </StyledMain>
      <Footer />
    </>
  );
}

const StyledMain = styled(Main)`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  background: url('/assets/background_main.svg') center/cover;
  text-align: center;
  padding-bottom: 0;

  @media screen and (min-aspect-ratio: 4/3) {
    min-height: 100vh;
  }
`;

const Catchphrase = styled.h2`
  margin-bottom: var(--space-bs);
  width: 100%;
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 1);
  color: var(--white);
`;

const HighLight = styled.span`
  margin-left: var(--space-sm);
  font-size: 52px;
  font-weight: 700;
  color: var(--purple-900);
`;
