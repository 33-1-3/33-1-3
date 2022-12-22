import { ReactComponent as GoToTopIcon } from '@/assets/gototop.svg';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import {
  useMemo,
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';

export interface GoToTopButtonProps {
  backgroundColor: string;
  color: string;
}
export interface GoToTopProps extends GoToTopButtonProps {
  width: number | string;
  height: number | string;
}

const GoToTopButton = styled(motion.button)<GoToTopButtonProps>`
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

const GoToTop = ({
  width,
  height,
  backgroundColor,
  color,
  ...props
}: GoToTopProps) => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [buttonStatus, setButtonStatus] = useState<boolean>(false);

  const checkScrollY = () => {
    setScrollY(window.pageYOffset);
    if (scrollY > 1000) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  };

  useEffect(() => {
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

    setScrollY(0);
    setButtonStatus(false);
  };

  return useMemo(
    () => (
      <>
        <AnimatePresence>
          {buttonStatus && (
            <GoToTopButton
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
              <GoToTopIcon width={width} height={height} />
            </GoToTopButton>
          )}
        </AnimatePresence>
      </>
    ),
    [color, backgroundColor, buttonStatus]
  );
};

GoToTop.defaultProps = {
  width: 40,
  height: 40,
  backgroundColor: 'var(--purple-900)',
  color: 'var(--white)',
};

export default GoToTop;
