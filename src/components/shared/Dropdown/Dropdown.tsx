import { useState, MouseEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import ComboInput from './ComboInput';
import ComboMenu from './ComboMenu';
import Option from './Option';

export interface DropdownProps {
  width?: string | number;
  height?: string | number;
  dropKind: 'view' | 'sort';
  label: string;
  content: { key: string; value: string }[];
  [key: string]: unknown;
}

function Dropdown({
  width,
  height,
  dropKind,
  label,
  content,
  ...props
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [, setSearchParams] = useSearchParams();
  const params = new URLSearchParams(window.location.search);
  const dropKey = params.get(dropKind);
  const dropValue = content.find(({ key }) => key === dropKey)?.value;

  const selectOption = (e: MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLUListElement;

    if (!target.getAttribute) return;

    const value = target.getAttribute('value');
    const param = new URLSearchParams(window.location.search);
    if (value !== null) {
      param.set(`${dropKind}`, value);
    }

    setSearchParams(param);
    setIsOpen(!isOpen);
  };

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <label className="srOnly" htmlFor="dropdown">
        {label}
      </label>
      <div style={{ width, height }}>
        <ComboInput isOpen={isOpen} onClick={toggleMenu} {...props}>
          {dropValue ?? content[0].value}
        </ComboInput>
        <ComboMenuContainer
          height={height}
          isOpen={isOpen}
          onClick={selectOption}
          {...props}
        >
          {content.map(({ key, value }, index) => (
            <Option key={index} value={key}>
              {value}
            </Option>
          ))}
        </ComboMenuContainer>
      </div>
    </>
  );
}

Dropdown.defaultProps = {
  width: 120,
  height: 36,
};

const ComboMenuContainer = styled(ComboMenu)`
  margin-top: 4px;
  z-index: 1000;
`;

export default Dropdown;
