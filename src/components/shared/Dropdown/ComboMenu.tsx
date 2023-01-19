import { ReactNode, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { flexContainer } from '@/styles/mixin';

export interface ComboMenuProps extends ListProps {
  height: string | number;
  children: ReactNode[];
  onClick: MouseEventHandler<HTMLUListElement>;
  [key: string]: unknown;
}

export interface ListProps {
  isOpen: boolean;
}

function ComboMenu({
  height,
  children,
  isOpen,
  onClick,
  ...props
}: ComboMenuProps) {
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
    <Ul
      role="listbox"
      aria-labelledby="dropdown"
      tabIndex={-1}
      isOpen={isOpen}
      onClick={onClick}
      style={{
        width: '100%',
        height: +height * children.length,
      }}
      {...props}
    >
      {children}
    </Ul>
  );
}

const Ul = styled.ul<ListProps>`
  ${flexContainer({ d: 'column', jc: 'center', ai: 'center' })}
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: relative;
  color: var(--black);
  background-color: var(--white);
  border: 1px solid var(--black);
  border-radius: 4px;
`;

export default ComboMenu;
