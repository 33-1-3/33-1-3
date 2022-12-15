import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProcessedResult } from '@/types/data';

const HEIGHT_PX = {
  small: 150,
  large: 394,
};

const Wrapper = styled(Link)<{ $heightNum: number }>`
  position: relative;

  &:hover .vinyl {
    left: ${({ $heightNum }) => $heightNum / 3}px;
  }
`;

const Cover = styled.img<{ $heightNum: number }>`
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
    line-height: ${({ $heightNum }) => $heightNum}px;
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
  searchResult: ProcessedResult;
  // 표시할 음반 커버 크기
  size: 'small' | 'large';
  // 마우스 호버시 LP판 나오는 애니메이션 작동 여부
  hoverInteraction: boolean;
  // TODO: rest props는 어떻게 받아와야 하는가?
}

const LPCover = ({
  searchResult,
  size,
  hoverInteraction,
  ...props
}: LPCoverProps) => {
  const heightNum = HEIGHT_PX[size];
  const { id, titleInfo, imgUrl } = searchResult;

  return (
    <Wrapper
      to={`${
        location.pathname === '/searchresult' ? `/item/${id}` : `/myitem/${id}`
      }`}
      state={searchResult}
      $heightNum={heightNum}
      style={{ width: `${heightNum}px`, height: `${heightNum}px` }}
      {...props}
    >
      <Cover
        src={imgUrl}
        alt=""
        data-title={titleInfo.title}
        $heightNum={heightNum}
        width={`${heightNum}`}
        height={`${heightNum}`}
      />
      {hoverInteraction && (
        <Vinyl
          className="vinyl"
          src="/assets/vinyl.svg"
          alt=""
          style={{ width: `${heightNum}px`, height: `${heightNum}px` }}
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
