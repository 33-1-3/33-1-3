import { useState, MouseEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import ComboInput from '@/common/components/Dropdown/ComboInput';
import ListBox from '@/common/components/Dropdown/ListBox';
import Option from '@/common/components/Dropdown/Option';

export interface DropdownProps {
  width: string | number;
  height: string | number;
  dropKind: string;
  content: { key: string; value: string }[];
  backgroundColor: string;
  color: string;
  label: string;
}

const ListContainer = styled(ListBox)`
  margin-top: 4px;
  z-index: 1000;
`;

const Dropdown = ({
  width,
  height,
  dropKind,
  content,
  backgroundColor,
  color,
  label,
  ...props
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [_, setSearchParams] = useSearchParams();
  const params = new URLSearchParams(window.location.search);
  const view = params.get('view');
  const picker = view === 'block' || view === null ? '블록' : '리스트';

  const select = (e: MouseEvent<HTMLDivElement>): void => {
    const target = e.target as HTMLTextAreaElement;

    if (target.nodeName === 'DIV') return;

    if (!target.getAttribute) return;

    const value = target.getAttribute('value');

    const param = new URLSearchParams(window.location.search);
    if (value !== null) {
      param.set(`${dropKind}`, value);
    }

    setSearchParams(param);
    setIsOpen(!isOpen);
  };

  const handleVisible = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <label className="srOnly" htmlFor="dropdown">
        {label}
      </label>
      <div className="combo">
        <ComboInput
          onClick={handleVisible}
          width={width}
          height={height}
          isOpen={isOpen}
          backgroundColor={backgroundColor}
          color={color}
          content={picker ?? content[0].value}
          {...props}
        />
        <ListContainer
          onClick={select}
          isOpen={isOpen}
          width={width}
          height={height}
          color={color}
          backgroundColor={backgroundColor}
          content={content.slice(1).map(({ key, value }, index) => (
            <Option key={index} value={key}>
              {value}
            </Option>
          ))}
          {...props}
        />
      </div>
    </>
  );
};

Dropdown.defaultProps = {
  width: 120,
  height: 36,
  backgroundColor: 'var(--white)',
  color: 'var(--black)',
  isopen: false,
};

export default Dropdown;
