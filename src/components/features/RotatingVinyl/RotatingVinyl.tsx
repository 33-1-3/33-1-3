import styled, { keyframes } from 'styled-components';

export interface RotatingVinylProps {
  imgUrl: string;
}

function RotatingVinyl({ imgUrl }: RotatingVinylProps) {
  return (
    <>
      <VinylWrapper aria-hidden={true}>
        <VinylImage imgUrl={imgUrl} />
        <VinylHole aria-hidden={true} />
      </VinylWrapper>
      <BackgroundContainer aria-hidden={true} />
    </>
  );
}

const vinylRotate = keyframes`
  100% {rotate: 360deg}
`;

const VinylWrapper = styled.div`
  z-index: -99;
  position: absolute;
  top: 50%;
  left: 48%;
  transform-origin: -5.2% 0;
  transform: translate(-55%, -50%);
  width: 37vw;
  height: 37vw;
  background: url('/assets/vinyl.svg') no-repeat center/contain;
  filter: drop-shadow(var(--shadow-Item));
  animation: ${vinylRotate} 60s infinite linear;
`;

const VinylImage = styled.div<{ imgUrl: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-51%, -51%);
  width: 12.5vw;
  height: 12.5vw;
  background: ${({ imgUrl }) => `url(${imgUrl})`} no-repeat center/contain;
  clip-path: circle(49% at 50% 50%);
`;

const VinylHole = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-60%, -60%);
  width: 0.9375vw;
  height: 0.9375vw;
  background-color: var(--black);
  border-radius: 0.9375vw;
`;

const BackgroundContainer = styled.div`
  z-index: -100;
  position: absolute;
  top: 0;
  left: 41vw;
  transform: rotate(15deg);
  width: 200vw;
  height: 200vh;
  background: var(--purple-100);
  box-shadow: var(--shadow-Background);
`;

export default RotatingVinyl;
