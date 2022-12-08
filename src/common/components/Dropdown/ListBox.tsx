import styled from 'styled-components';

export interface ListBoxProps {
  width: string | number;
  height: string | number;
  content: React.ReactNode[];
  backgroundColor: string;
  color: string;
  isOpen: boolean;
  onClick: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface ListProps {
  backgroundColor: string;
  color: string;
  height: string | number;
  isOpen: boolean;
}

const List = styled.div<ListProps>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 4px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  border: 1px solid ${({ color }) => color};
  font-weight: 400;
`;

const ListBox = ({
  width,
  height,
  content,
  color,
  backgroundColor,
  isOpen,
  onClick,
  ...props
}: ListBoxProps) => {
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
    <List
      onClick={onClick}
      role="listbox"
      aria-labelledby="dropdown"
      tabIndex={-1}
      style={{
        width,
        height: +height * content.length,
      }}
      color={color}
      height={height}
      backgroundColor={backgroundColor}
      isOpen={isOpen}
      {...props}
    >
      {content}
    </List>
  );
};

ListBox.defaultProps = {
  backgroundColor: 'var(--white)',
  color: 'var(--black)',
};

export default ListBox;
