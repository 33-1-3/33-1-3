import styled from 'styled-components';
import { motion } from 'framer-motion';
import { flexContainer } from '@/styles/mixin';
import { DROPDOWN_HOVER_VALUE } from '@/utils/constants/motion';

export interface OptionProps {
  value: string;
  children: string;
  [key: string]: unknown;
}

function Option({ value, children, ...props }: OptionProps) {
  const { fastTransition, changeMauve } = DROPDOWN_HOVER_VALUE;
  return (
    <StyledLi
      role="option"
      value={value}
      style={{ width: '100%', height: '100%' }}
      whileHover={changeMauve}
      transition={fastTransition}
      {...props}
    >
      {children}
    </StyledLi>
  );
}

const StyledLi = styled(motion.li)`
  ${flexContainer({ jc: 'center', ai: 'center' })}
  border-radius: 2px;
  &:not(:last-child) {
    border-bottom: 1px solid var(--gray-200);
  }
`;

export default Option;
