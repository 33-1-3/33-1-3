import styled from 'styled-components';

export interface OptionProps {
  value: string;
  children: string;
}

const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  &:not(:last-child) {
    border-bottom: 1px solid var(--gray-200);
  }

  &:hover {
    cursor: pointer;
  }
`;

const Option = ({ value, children, ...props }: OptionProps) => {
  return (
    <Li
      role="option"
      style={{ width: '100%', height: '100%' }}
      value={value}
      {...props}
    >
      {children}
    </Li>
  );
};

export default Option;
