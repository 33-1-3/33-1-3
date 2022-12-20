import React, { ReactNode, useEffect } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { SquareButton } from '..';
// import { getTabbableElements } from '@/utils/functions/focusTabbable';

// const { documentElement: htmlElement } = document;
// const reactDomContainer = document.getElementById('root');

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 9999;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  border-radius: 16px;
  background: var(--white);
  box-shadow: var(--shadow-isOpened);
`;

const Title = styled.h2`
  padding: 24px 24px 12px 24px;
  font-size: 32px;
  font-weight: 700;
  border-bottom: 1px solid var(--gray-100);
`;

const NodeContent = styled.div`
  flex-grow: 1;
  margin: 24px 24px 0 24px;
  overflow-y: auto;
`;

const StringContent = styled.span`
  flex-grow: 1;
  margin: 24px 24px 0 24px;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 24px;
`;

const Dim = styled.div`
  position: fixed;
  z-index: 8999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
`;

export interface NewDialogProps {
  isOpened: boolean;
  // openner: HTMLElement;
  width: number;
  height: number;
  title: string;
  children: ReactNode;
  onConfirm: () => void;
  onClose: () => void;
}

const NewDialog = ({
  isOpened,
  // openner,
  width,
  height,
  title,
  children,
  onConfirm,
  onClose,
  ...props
}: NewDialogProps) => {
  const containerRef = React.createRef();
  // let tabbableElements: HTMLElement[] = [];
  // let unbindEscKeyEvents: (() => void) | null = null;

  const handleClose = () => {
    onClose();
    // openner.focus();
  };

  const handleConfirm: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    onConfirm();
    handleClose();
  };

  // const bindEscKeyEvents = () => {
  //   const handler = (e: KeyboardEvent) => {
  //     if (e.key.toLowerCase().includes('escape')) {
  //       console.log('pressed esc key');
  //       handleClose();
  //     }
  //   };

  //   document.addEventListener('keyup', handler);

  //   return () => document.removeEventListener('keyup', handler);
  // };

  // useEffect(() => {
  //   (containerRef.current as HTMLElement)?.focus();
  //   tabbableElements = getTabbableElements(containerRef.current as HTMLElement);
  //   settingKeyboardTrap();

  //   htmlElement.style.overflowY = 'hidden';
  //   reactDomContainer?.setAttribute('aria-hidden', 'true');

  //   unbindEscKeyEvents = bindEscKeyEvents();

  //   return () => {
  //     htmlElement.style.overflowY = 'visible';
  //     reactDomContainer?.setAttribute('aria-hidden', 'false');

  //     unbindEscKeyEvents?.();
  //   };
  // }, []);

  // const settingKeyboardTrap = () => {
  //   const tabbles = tabbableElements;
  //   const firstElement = tabbles[0];
  //   const lastElement = tabbles[tabbles.length - 1];

  //   firstElement.addEventListener('keydown', (e) => {
  //     if (e.shiftKey && e.key.toLowerCase().includes('tab')) {
  //       e.preventDefault();
  //       lastElement?.focus();
  //     }
  //   });

  //   lastElement.addEventListener('keydown', (e) => {
  //     if (!e.shiftKey && e.key.toLowerCase().includes('tab')) {
  //       e.preventDefault();
  //       firstElement?.focus();
  //     }
  //   });
  // };

  isOpened = true;

  return createPortal(
    <>
      {isOpened && (
        <>
          {' '}
          <Container
            ref={containerRef}
            tabIndex={-1}
            role="dialog"
            aria-modal={isOpened}
            style={{ width, height }}
          >
            {title && <Title>{title}</Title>}
            {typeof children === 'string' ? (
              <StringContent>{children}</StringContent>
            ) : (
              <NodeContent>{children}</NodeContent>
            )}
            <Buttons>
              <SquareButton
                type="submit"
                fontSize={18}
                size={'large'}
                onClick={handleConfirm}
              >
                확인
              </SquareButton>
              <SquareButton
                type="button"
                fontSize={18}
                size={'large'}
                isFilled={false}
                onClick={handleClose}
              >
                취소
              </SquareButton>
            </Buttons>
          </Container>
          <Dim onClick={handleClose} />
        </>
      )}
    </>,
    document.getElementById('dialog-zone') as HTMLElement
  );
};

export default NewDialog;
