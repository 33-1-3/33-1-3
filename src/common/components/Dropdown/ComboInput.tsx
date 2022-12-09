import styled from 'styled-components';

export interface ComboInputProps {
  width: string | number;
  height: string | number;
  content: string;
  isOpen: boolean;
  backgroundColor: string;
  color: string;
  onClick: () => void;
}

export interface InputProps {
  backgroundColor: string;
  color: string;
  isOpen: boolean;
}

const Input = styled.div<InputProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-right: 24px;
  border-radius: 4px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  font-weight: 400;

  &:hover {
    cursor: pointer;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
    background: no-repeat url('/assets/allow.svg');
    background-position: center right 12px;
    ${(props) => {
      return props.isOpen
        ? `
        transition: 0.3s;
        transform: scaleY(-1);
      `
        : `transition: 0.3s;`;
    }}
  }
`;

const ComboInput = ({
  width,
  height,
  content,
  isOpen,
  color,
  backgroundColor,
  onClick,
  ...props
}: ComboInputProps) => {
  return (
    <Input
      onClick={onClick}
      role="combobox"
      id="dropdown"
      tabIndex={0}
      style={{ width, height }}
      color={color}
      backgroundColor={backgroundColor}
      isOpen={isOpen}
      {...props}
    >
      {content}
    </Input>
  );
};

export default ComboInput;
