import { useState } from 'react';
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
}

const ListContainer = styled(ListBox)`
  margin-top: 4px;
`;

const Dropdown = ({
  width,
  height,
  dropKind,
  content,
  backgroundColor,
  color,
  ...props
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [picker, setPicker] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const select = (e: React.FormEvent<HTMLFormElement>): void => {
    if (!(e.target as HTMLTextAreaElement).getAttribute) return;

    const value = (e.target as HTMLTextAreaElement).getAttribute('value');
    const content = (e.target as HTMLTextAreaElement).textContent;

    const param = new URLSearchParams(window.location.search);
    if (value !== null) {
      param.set(`${dropKind}`, value);
    }

    setSearchParams(param);
    setPicker(content);
    setIsOpen(!isOpen);
  };

  const handleVisible = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* sr-only 추가되면 숨겨질 라벨입니다 */}
      <label htmlFor="dropdown">test label</label>
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
          content={content
            .slice(1)
            .map((ele: { key: string; value: string }, index) => (
              <Option key={index} value={ele.key}>
                {ele.value}
              </Option>
            ))}
          {...props}
        />
      </div>
    </>
  );
};

Dropdown.defaultProps = {
  backgroundColor: 'var(--white)',
  color: 'var(--black)',
  isopen: false,
};

export default Dropdown;
