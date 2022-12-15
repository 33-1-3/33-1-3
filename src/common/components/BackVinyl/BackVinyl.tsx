import styled, { keyframes } from 'styled-components';

export interface BackVinylProps {
  className: string;
  imgUrl: string;
}

function BackVinyl({ imgUrl }: BackVinylProps) {
  return (
    <>
      <ToneArm aria-hidden={true} />
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

const ToneArm = styled.div`
  z-index: -98;
  position: absolute;
  top: 0;
  left: 50vw;
  transform: translate(-50%, -10%);
  width: 187px;
  height: 290px;
  background: url('/assets/tonearm.svg') no-repeat center/contain;
  filter: drop-shadow(var(--shadow-Item));
`;

const VinylWrapper = styled.div`
  z-index: -99;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: -5.2% 0;
  transform: translate(-55%, -50%);
  width: 39vw;
  height: 39vw;
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
  left: 44vw;
  transform: rotate(15deg);
  width: 200vw;
  height: 200vh;
  background: var(--purple-100);
  box-shadow: var(--shadow-Background);
`;

export default BackVinyl;
