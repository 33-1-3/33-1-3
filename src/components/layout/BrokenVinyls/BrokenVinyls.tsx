import uuid from 'react-uuid';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { BROKEN_MOTION_VALUE } from '@/utils/constants/motion';

function BrokenVinyls() {
  return (
    <BrokenVinylsWrapper>
      {Array.from({ length: 5 }).map((_, index) => {
        const path = `/assets/broken_vinyl_${index + 1}.svg`;
        const { x, y, scale } = BROKEN_MOTION_VALUE[index + 1];

        return (
          <BrokenVinyl
            key={uuid()}
            src={path}
            alt=""
            initial={{ x: 0, y: 0, scale: 0.9 }}
            animate={{ x, y, scale }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
          />
        );
      })}
    </BrokenVinylsWrapper>
  );
}

const vibration = keyframes`
  0% {
    transform: translate(-160px, 80px);
  }
  50% {
    transform: translate(-164px, 80px);
  }
  100% {
    transform: translate(-156px, 80px);
  }
`;

const BrokenVinylsWrapper = styled.div`
  position: relative;
  width: min-content;
  margin: 0 auto;
  transform: translate(-160px, 80px);
  animation: ${vibration} 0.1s 5 ease;
  animation-direction: alternate;
`;

const BrokenVinyl = styled(motion.img)`
  position: absolute;
  top: 0;
  filter: drop-shadow(var(--shadow-Item));
`;

export default BrokenVinyls;
