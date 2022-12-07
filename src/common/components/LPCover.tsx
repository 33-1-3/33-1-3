import styled from 'styled-components';

const heightPx = {
  small: 150,
  large: 394,
};

export interface LPCoverProps {
  // 음반 커버 이미지 경로
  imgURL?: string;
  // 음반 커버 이미지 경로가 올바르지 않을 때 대체 음반 커버 이미지와 함께 표시할 음반 제목
  title: string;
  // 표시할 음반 커버 크기
  size?: 'small' | 'large';
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
  const height = heightPx[size];

  const Wrapper = styled.div`
    position: relative;
    width: max-content;
    height: max-content;

    &:hover .vinyl {
      left: ${height / 3}px;
    }
  `;

  const Cover = styled.img`
    box-shadow: var(--shadow-Item);

    &::before {
      content: attr(alt);
      display: block;
      position: absolute;
      width: ${height}px;
      height: ${height}px;
      text-align: center;
      line-height: ${height}px;
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
    filter: drop-shadow(var(--shadow-Item));
  `;

  return (
    <Wrapper {...props}>
      <Cover src={imgURL} alt={title} height={height} />
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
  size: 'small',
  hoverInteraction: true,
};

export default LPCover;
