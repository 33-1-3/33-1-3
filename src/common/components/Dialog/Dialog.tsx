import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { SquareButton } from '@/common/components';
import { useRecoilState } from 'recoil';
import { initialDialogState, dialogState } from '@/recoil/globalState';

const DialogBackground = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
`;

const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  border-radius: 16px;
  background: var(--white);
  box-shadow: var(--shadow-Modal);
`;

const DialogTitle = styled.h2`
  padding: 24px 24px 12px 24px;
  font-size: 32px;
  font-weight: 700;
  border-bottom: 1px solid var(--gray-100);
`;

const DialogNodeContent = styled.div`
  flex-grow: 1;
  margin: 24px 24px 0 24px;
  overflow-y: auto;
`;

const DialogStringContent = styled.span`
  flex-grow: 1;
  margin: 24px 24px 0 24px;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
`;

const DialogButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 24px;
`;

export interface DialogProps {
  isOpen: boolean;
  width: number;
  height: number;
  title?: string;
  children: React.ReactNode;
  confirm: () => void;
}

const Dialog = ({
  isOpen,
  width,
  height,
  title,
  children,
  confirm,
  ...props
}: DialogProps) => {
  const [_, setDialog] = useRecoilState(dialogState);
  return createPortal(
    <>
      {isOpen && (
        <DialogBackground onClick={() => setDialog(initialDialogState)}>
          <DialogContainer
            style={{ width, height }}
            onClick={(e) => e.stopPropagation()}
          >
            {title && <DialogTitle>{title}</DialogTitle>}
            {typeof children === 'string' ? (
              <DialogStringContent>{children}</DialogStringContent>
            ) : (
              <DialogNodeContent>{children}</DialogNodeContent>
            )}
            <DialogButtons>
              <SquareButton fontSize={18} size={'large'} onClick={confirm}>
                확인
              </SquareButton>
              <SquareButton
                fontSize={18}
                size={'large'}
                isFilled={false}
                onClick={() => setDialog(initialDialogState)}
              >
                취소
              </SquareButton>
            </DialogButtons>
          </DialogContainer>
        </DialogBackground>
      )}
    </>,
    document.getElementById('dialog-root') as Element
  );
};

export default Dialog;
