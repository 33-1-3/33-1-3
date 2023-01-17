import styled from 'styled-components';
import { motion } from 'framer-motion';

export interface OptionProps {
  value: string;
  children: string;
}

function Option({ value, children, ...props }: OptionProps) {
  return (
    <Li
      role="option"
      style={{ width: '100%', height: '100%' }}
      value={value}
      whileHover={{
        backgroundColor: 'var(--purple-100)',
        color: 'var(--black)',
      }}
      transition={{
        duration: 0.3,
        ease: 'easeOut',
      }}
      {...props}
    >
      {children}
    </Li>
  );
}

const Li = styled(motion.li)`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  border-radius: 2px;

  &:not(:last-child) {
    border-bottom: 1px solid var(--gray-200);
  }

  &:hover {
    cursor: pointer;
  }
`;

export default Option;
