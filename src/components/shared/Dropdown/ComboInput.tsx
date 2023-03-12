import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { flexContainer, absolute } from '@/styles/mixin';

export interface ComboInputProps extends InputProps {
  children: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  [key: string]: unknown;
}

export interface InputProps {
  isOpen: boolean;
}

function ComboInput({ isOpen, onClick, children, ...props }: ComboInputProps) {
  return (
    <StyledInput
      role="combobox"
      id="dropdown"
      tabIndex={0}
      isOpen={isOpen}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledInput>
  );
}

const StyledInput = styled.div<InputProps>`
  ${flexContainer({ jc: 'center', ai: 'center' })}
  width: 100%;
  height: 100%;
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
    ${absolute({ t: 0, r: 0 })}
    width: 100%;
    height: 100%;
    background: no-repeat url('/assets/arrow.svg');
    background-position: center right 12px;
    transition: 0.3s;
    ${({ isOpen }) => isOpen && `transform:scaleY(-1);`}
  }
`;

export default ComboInput;
