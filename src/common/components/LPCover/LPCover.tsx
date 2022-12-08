import styled from 'styled-components';

const HEIGHT_PX = {
  small: 150,
  large: 394,
};

const Wrapper = styled.div<{ height: number }>`
  position: relative;
  width: ${({ height }) => height}px;
  height: ${({ height }) => height}px;

  &:hover .vinyl {
    left: ${({ height }) => height / 3}px;
  }
`;

const Cover = styled.img<{ height: number }>`
  box-shadow: var(--shadow-Item);

  // img가 제대로 불러와지지 않았을 때 보일 가상 요소
  &::before {
    content: attr(data-title);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: ${({ height }) => height}px;
    background-color: var(--gray-100);
    box-shadow: var(--shadow-Item);
  }
`;

const Vinyl = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: all 0.3s ease;
  z-index: -100;
  // TODO: box-shadow 방식과 shadow 형태가 살짝 다름
  filter: drop-shadow(var(--shadow-Item));
`;

export interface LPCoverProps {
  // 음반 커버 이미지 경로
  imgURL: string;
  // 음반 커버 이미지 경로가 올바르지 않을 때 대체 음반 커버 이미지와 함께 표시할 음반 제목
  title: string;
  // 표시할 음반 커버 크기
  size: 'small' | 'large';
  // 마우스 호버시 LP판 나오는 애니메이션 작동 여부
  hoverInteraction: boolean;
  // TODO: rest props는 어떻게 받아와야 하는가?
}

const LPCover = ({
  imgURL,
  title,
  size,
  hoverInteraction,
  ...props
}: LPCoverProps) => {
  const height = HEIGHT_PX[size];

  return (
    <Wrapper height={height} {...props}>
      <Cover src={imgURL} alt="" data-title={title} height={height} />
      {hoverInteraction && (
        <Vinyl
          className="vinyl"
          src="/assets/vinyl.svg"
          alt=""
          height={height}
        />
      )}
    </Wrapper>
  );
};

LPCover.defaultProps = {
  imgUrl: '',
  size: 'small',
  hoverInteraction: true,
};

export default LPCover;
