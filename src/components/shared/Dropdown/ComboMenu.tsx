import { ReactNode, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { flexContainer } from '@/styles/mixin';
import { calcLength } from 'framer-motion';

export interface ComboMenuProps {
  children: ReactNode[];
  onClick: MouseEventHandler<HTMLUListElement>;
  isOpen: boolean;
  [key: string]: unknown;
}

export interface ListProps {
  length: number;
  isOpen: boolean;
}

function ComboMenu({ children, isOpen, onClick, ...props }: ComboMenuProps) {
  // 유틸관련 1차 배포 후 수정 및 업로드
  // const containerRef = useRef(null);

  // let listItems = [];

  // const handleKeyUpDown = (e) => {
  //   const key = getCompatibleKey(e);

  // switch (key) {
  //   case KEYS.ARROW_UP:
  //   case KEYS.ARROW_DOWN:
  //     e.preventDefault();
  //     arrowNavigation(direction, listItems, key);
  //     e.stopPropagation();
  //     break;
  //   default:
  //     break;
  // }
  // };

  return (
    <StyledUl
      role="listbox"
      aria-labelledby="dropdown"
      tabIndex={-1}
      isOpen={isOpen}
      onClick={onClick}
      length={children.length}
      {...props}
    >
      {children}
    </StyledUl>
  );
}

const StyledUl = styled.ul<ListProps>`
  width: 100%;
  height: ${({ length }) => 36 * length + 'px'};
  ${flexContainer({ d: 'column', jc: 'center', ai: 'center' })}
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: relative;
  color: var(--black);
  background-color: var(--white);
  border: 1px solid var(--black);
  border-radius: 4px;
`;

export default ComboMenu;
