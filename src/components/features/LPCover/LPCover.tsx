import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProcessedResult } from '@/types/data';
import { useMemo, memo } from 'react';

const HEIGHT_PX = {
  small: 150,
  large: 394,
};

export interface LPCoverProps {
  searchResult: ProcessedResult;
  size?: 'small' | 'large';
  hoverInteraction?: boolean;
}

export interface HeightProps {
  $heightNum: number;
}

function LPCover({
  searchResult,
  size,
  hoverInteraction,
  ...props
}: LPCoverProps) {
  const heightNum = HEIGHT_PX[size as 'small' | 'large'];
  const { id, titleInfo, imgUrl } = searchResult;

  return useMemo(
    () => (
      <Wrapper
        to={`/item/${id}`}
        state={searchResult}
        $heightNum={heightNum}
        style={{
          width: heightNum,
          height: heightNum,
        }}
        {...props}
      >
        <Cover
          src={imgUrl}
          alt=""
          data-title={titleInfo.title}
          $heightNum={heightNum}
          width={heightNum}
          height={heightNum}
        />
        {hoverInteraction && (
          <Vinyl
            className="vinyl"
            src="/assets/vinyl.svg"
            alt=""
            style={{ width: heightNum, height: heightNum }}
          />
        )}
      </Wrapper>
    ),
    [searchResult, size, hoverInteraction]
  );
}

LPCover.defaultProps = {
  size: 'small',
  hoverInteraction: true,
};

const Wrapper = styled(Link)<HeightProps>`
  position: relative;

  &:hover .vinyl {
    left: ${({ $heightNum }) => $heightNum / 3}px;
  }
`;

const Cover = styled.img<HeightProps>`
  box-shadow: var(--shadow-Item);
  background-color: var(--gray-100);

  @keyframes skeleton-gradient {
    0% {
      background-color: #cacaca;
    }
    50% {
      background-color: var(--gray-100);
    }
    100% {
      background-color: #cacaca;
    }
  }

  animation: skeleton-gradient 1.5s infinite ease-in-out;

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
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-indent: 12px;
    word-break: break-all;
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

export default memo(LPCover);
