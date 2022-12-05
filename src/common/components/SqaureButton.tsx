import styled from 'styled-components';

interface SqaureButtonProps {
  children: string;
}

const isApprove = (buttonText: string): boolean => buttonText === '확인';
const isCancel = (buttonText: string): boolean => buttonText === '취소';

const SqaureButton = styled.button<SqaureButtonProps>`
  line-height: var(--text-md);
  padding: ${({ children }) =>
    isApprove(children) || isCancel(children) ? '12px 24px' : '10px 16px'};
  background-color: ${({ children }) =>
    isCancel(children) ? 'var(--white)' : 'var(--purple-900)'};
  border: ${({ children }) =>
    isCancel(children) ? '1px solid var(--purple-900)' : null};
  border-radius: 6px;
  font-family: 'LINESeed';
  font-weight: 700;
  font-size: var(--text-md);
  color: ${({ children }) =>
    isCancel(children) ? 'var(--purple-900)' : 'var(--white)'};
`;

export default SqaureButton;
