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
  margin-bottom: 52px;
  background: center/cover url('/assets/background_img.svg');
  text-align: center;
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
