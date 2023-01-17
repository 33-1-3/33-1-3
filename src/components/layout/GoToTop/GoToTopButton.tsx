import { ReactComponent as Icon } from '@/assets/gototop.svg';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import {
  useMemo,
  MouseEvent,
  MouseEventHandler,
  useLayoutEffect,
  useState,
} from 'react';

export interface ButtonProps {
  backgroundColor: string;
  color: string;
}

export interface GoToTopButtonProps extends ButtonProps {
  width: number | string;
  height: number | string;
}

function GoToTopButton({
  width,
  height,
  backgroundColor,
  color,
  ...props
}: GoToTopButtonProps) {
  const [scrollY, setScrollY] = useState<number>(0);
  const [buttonStatus, setButtonStatus] = useState<boolean>(false);

  const checkScrollY = () => {
    setScrollY(window.pageYOffset);
    if (scrollY > 800) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  };

  useLayoutEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', checkScrollY);
    };
    watch();
    return () => {
      window.removeEventListener('scroll', checkScrollY);
    };
  });

  const scrollToTop: MouseEventHandler<HTMLButtonElement> = (
    e: MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return useMemo(
    () => (
      <>
        <AnimatePresence>
          {buttonStatus && (
            <Button
              type="button"
              style={{ width, height }}
              color={color}
              backgroundColor={backgroundColor}
              onClick={scrollToTop}
              initial={{ y: '20px', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{
                duration: 0.3,
                ease: 'easeOut',
              }}
              exit={{ y: '20px', opacity: 0 }}
              {...props}
            >
              <Icon width={width} height={height} />
            </Button>
          )}
        </AnimatePresence>
      </>
    ),
    [color, backgroundColor, buttonStatus]
  );
}

GoToTopButton.defaultProps = {
  width: 40,
  height: 40,
  backgroundColor: 'var(--purple-900)',
  color: 'var(--white)',
};

const Button = styled(motion.button)<ButtonProps>`
  position: fixed;
  right: 108px;
  bottom: 48px;
  z-index: 1000;
  filter: drop-shadow(var(--shadow-Button-back));
  circle {
    fill: ${({ backgroundColor }) => backgroundColor};
  }
  path {
    fill: ${({ color }) => color};
    stroke: ${({ color }) => color};
  }
`;

export default GoToTopButton;
