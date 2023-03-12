import { Header, SearchInput, Footer, Main } from '@/components';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { flexContainer } from '@/styles/mixin';
import useHandleSubmit from '@/hooks/useHandleSubmit';
import { FLOATING_MOTION_VALUE } from '@/utils/constants/motion';

function Home() {
  const { initial, animate, transition } = FLOATING_MOTION_VALUE;

  return (
    <>
      <Header />
      <StyledMain>
        <motion.div initial={initial} animate={animate} transition={transition}>
          <Catchphrase>
            Record your <HighLight>Records!</HighLight>
          </Catchphrase>
          <SearchInput onSubmit={useHandleSubmit()} />
        </motion.div>
      </StyledMain>
      <Footer />
    </>
  );
}

const StyledMain = styled(Main)`
  ${flexContainer({ d: 'column', w: 'wrap', jc: 'center', ai: 'center' })};
  min-width: 680px;
  background: url('/assets/background_main.svg') center/cover;
  text-align: center;
  padding-bottom: 64px;
`;

const Catchphrase = styled(motion.h2)`
  margin-bottom: var(--space-xs);
  width: 100%;
  font-size: 2rem;
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 1);
  color: var(--white);
`;

const HighLight = styled.span`
  margin-left: var(--space-sm);
  font-size: 52px;
  font-weight: 700;
  color: var(--purple-900);
`;

export default Home;
