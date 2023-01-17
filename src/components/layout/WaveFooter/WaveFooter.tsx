import styled from 'styled-components';
import { ReactComponent as WaveIcon } from '@/assets/wave.svg';

function WaveFooter({ ...args }) {
  return (
    <FixedFooter style={{ width: '100vw' }}>
      <MoveWaveIcon width="100%" {...args} />
      <BottomBackground style={{ width: '100vw', height: '10px' }} />
    </FixedFooter>
  );
}

const FixedFooter = styled.footer`
  position: fixed;
  left: 0px;
  bottom: 0px;
  overflow: hidden;
`;

const BottomBackground = styled.div`
  position: absolute;
  background: var(--purple-500);
  bottom: 0px;
`;

const MoveWaveIcon = styled(WaveIcon)`
  .wave {
    animation: wave 5s linear;
    animation-iteration-count: infinite;
    fill: var(--purple-500);
  }
  .drop {
    fill: transparent;
    animation: drop 5s ease infinite normal;
    stroke: var(--purple-900);
    stroke-width: 0.5;
    opacity: 0.6;
    transform: translateY(80%);
  }
  .drop1 {
    transform-origin: 20px 3px;
  }
  .drop2 {
    animation-delay: 3s;
    animation-duration: 3s;
    transform-origin: 25px 3px;
  }
  .drop3 {
    animation-delay: -2s;
    animation-duration: 3.4s;
    transform-origin: 16px 3px;
  }
  .gooeff {
    filter: url(#goo);
  }
  #wave2 {
    animation-duration: 5s;
    animation-direction: reverse;
    opacity: 0.6;
  }
  #wave3 {
    animation-duration: 7s;
    opacity: 0.3;
  }
  @keyframes drop {
    0% {
      transform: translateY(80%);
      opacity: 0.6;
    }
    80% {
      transform: translateY(80%);
      opacity: 0.6;
    }
    90% {
      transform: translateY(10%);
      opacity: 0.6;
    }
    100% {
      transform: translateY(0%) scale(1.5);
      stroke-width: 0.2;
      opacity: 0;
    }
  }
  @keyframes wave {
    to {
      transform: translateX(-100%);
    }
  }
`;

export default WaveFooter;
