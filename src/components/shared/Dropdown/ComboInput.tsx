import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { flexContainer, absolute } from '@/styles/mixin';

export interface ComboInputProps extends InputProps {
  width: string | number;
  height: string | number;
  children: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  [key: string]: unknown;
}

export interface InputProps {
  isOpen: boolean;
}

function ComboInput({
  width,
  height,
  isOpen,
  onClick,
  children,
  ...props
}: ComboInputProps) {
  return (
    <Input
      role="combobox"
      id="dropdown"
      tabIndex={0}
      isOpen={isOpen}
      onClick={onClick}
      style={{ width, height }}
      {...props}
    >
      {children}
    </Input>
  );
}

const Input = styled.div<InputProps>`
  ${flexContainer({ jc: 'center', ai: 'center' })}
  position: relative;
  padding-right: var(--space-lg);
  color: var(--black);
  background-color: var(--white);
  border: 1px solid var(--black);
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }

  &::after {
    content: '';
    ${absolute({ r: 0 })}
    width: 100%;
    height: 100%;
    background: no-repeat url('/assets/arrow.svg');
    background-position: center right 12px;
    ${({ isOpen }) => {
      return isOpen
        ? `
        transition: 0.3s;
        transform: scaleY(-1);
      `
        : `transition: 0.3s;`;
    }}
  }
`;

export default ComboInput;
