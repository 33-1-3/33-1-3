import { useState, useCallback, MouseEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import ComboInput from './ComboInput';
import ComboMenu from './ComboMenu';
import Option from './Option';
import styled from 'styled-components';

export interface DropdownProps {
  dropKind: 'view' | 'sort';
  label: string;
  content: { key: string; value: string }[];
  [key: string]: unknown;
}

function Dropdown({ dropKind, label, content, ...props }: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [, setSearchParams] = useSearchParams();
  const params = new URLSearchParams(window.location.search);
  const dropKey = params.get(dropKind);
  const dropValue = content.find(({ key }) => key === dropKey)?.value;

  const selectOption = useCallback(
    (e: MouseEvent<HTMLUListElement>) => {
      const target = e.target as HTMLUListElement;

      if (!target.getAttribute) return;

      const value = target.getAttribute('value');
      const param = new URLSearchParams(window.location.search);
      if (value !== null) {
        param.set(`${dropKind}`, value);
      }

      setSearchParams(param);
      setIsOpen(!isOpen);
    },
    [dropKind, isOpen, setSearchParams]
  );

  const toggleMenu = useCallback((): void => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <ComboContainer>
      <label className="srOnly" htmlFor="dropdown">
        {label}
      </label>
      <ComboInput isOpen={isOpen} onClick={toggleMenu} {...props}>
        {dropValue ?? content[0].value}
      </ComboInput>
      <ComboMenuContainer isOpen={isOpen} onClick={selectOption} {...props}>
        {content.map(({ key, value }, index) => (
          <Option key={index} value={key}>
            {value}
          </Option>
        ))}
      </ComboMenuContainer>
    </ComboContainer>
  );
}

const ComboContainer = styled.div`
  position: relative;
  width: 7.5rem;
  height: 2.25rem;
`;

const ComboMenuContainer = styled(ComboMenu)`
  margin-top: 4px;
  z-index: 1000;
`;

export default Dropdown;
