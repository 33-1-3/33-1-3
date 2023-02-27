import { useMemo, memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { absolute } from '@/styles/mixin';
import { ProcessedResult } from '@/types/data';

const HEIGHT_PX = { small: 150, large: 394 };

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
  size = 'small',
  hoverInteraction = true,
}: LPCoverProps) {
  const { id, titleInfo, imgUrl = '' } = searchResult;
  const heightNum = HEIGHT_PX[size];

  return useMemo(
    () => (
      // TODO: Items 페이지에서는 Link로 작동하면 안됨
      <StyledLink
        to={`/item/${id}`}
        state={searchResult}
        $heightNum={heightNum}
        aria-label={titleInfo.title}
      >
        <Cover
          src={imgUrl}
          alt=""
          data-title={titleInfo.title}
          width={heightNum}
          height={heightNum}
          $heightNum={heightNum}
          draggable={false}
        />
        {hoverInteraction && (
          <Vinyl
            className="vinyl"
            src="/assets/vinyl.svg"
            alt=""
            width={heightNum}
            height={heightNum}
            draggable={false}
          />
        )}
      </StyledLink>
    ),
    [searchResult, size, hoverInteraction]
  );
}

const StyledLink = styled(Link)<HeightProps>`
  display: block;
  position: relative;
  width: ${({ $heightNum }) => $heightNum}px;
  height: ${({ $heightNum }) => $heightNum}px;

  &:hover .vinyl {
    transform: translate3d(${({ $heightNum }) => $heightNum / 3}px, 0, 0);
  }
`;

const Cover = styled.img<HeightProps>`
  position: absolute;
  object-fit: cover;
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
    ${absolute({ t: 0, r: 0, b: 0, l: 0 })};
    width: ${({ $heightNum }) => $heightNum}px;
    height: ${({ $heightNum }) => $heightNum}px;
    padding: 10px;
    line-height: ${({ $heightNum }) => $heightNum - 20}px;
    text-align: center;
    background-color: var(--gray-100);
    box-shadow: var(--shadow-Item);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }
`;

const Vinyl = styled.img`
  ${absolute({ t: 0, r: 0, b: 0, l: 0 })};
  transition: all 0.3s ease;
  z-index: -100;
  // TODO: box-shadow 방식과 shadow 형태가 살짝 다름
  filter: drop-shadow(var(--shadow-Item));
`;

export default memo(LPCover);
