import styled from 'styled-components';
import { Header, SearchInput, Footer, Main } from '@/common/components';
import useHandleSubmit from './../../hooks/useHandleSubmit';

export default function Home() {
  return (
    <>
      <Header />
      <StyledMain>
        <Catchphrase>
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
  padding-bottom: 64px;
`;

const Catchphrase = styled.h2`
  margin-bottom: var(--space-xs);
  width: 100%;
  font-size: 2rem;
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 1);
  color: var(--white);

  @media screen and (max-width: 768px) {
    font-size: 4.1vw;
  }
`;

const HighLight = styled.span`
  margin-left: var(--space-sm);
  font-size: 52px;
  font-weight: 700;
  color: var(--purple-900);

  @media screen and (max-width: 768px) {
    font-size: 6.8vw;
  }
`;
