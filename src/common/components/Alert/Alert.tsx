import styled, { css } from 'styled-components';

export interface AlertProps {
  type: 'top' | 'bottom';
  width: string | number;
  height: string | number;
  backgroundColor: string;
  children: string;
}

const Alert = ({
  type,
  width,
  height,
  backgroundColor,
  children,
  ...props
}: AlertProps) => {
  return type === 'bottom' ? (
    <BottomAlert
      role="alert"
      backgroundColor={backgroundColor}
      style={{ width, height }}
      {...props}
    >
      {children}
    </BottomAlert>
  ) : (
    <TopAlert
      role="alert"
      backgroundColor={backgroundColor}
      style={{ width, height }}
      {...props}
    >
      {children}
    </TopAlert>
  );
};

const BottomAlert = styled.div<{ backgroundColor: string }>`
  position: fixed;
  bottom: 112px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 4px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  animation: move 0.8s both;
  z-index: 3000;

  @keyframes move {
    from {
      transform: translate3D(100%, 0, 0);
    }
    to {
      transform: translate3D(0, 0, 0);
    }
  }

  &:empty {
    display: none;
  }
`;

const TopAlert = styled.div<{ backgroundColor: string }>`
  position: fixed;
  top: 0;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: var(--purple-900);
  animation: move 0.8s both;
  z-index: 3000;

  @keyframes move {
    from {
      transform: translate3D(-50%, -100px, 0);
    }
    to {
      transform: translate3D(-50%, 0, 0);
    }
  }

  &:empty {
    display: none;
  }
`;

Alert.defaultProps = {
  width: '260px',
  height: '68px',
  backgroundColor: 'var(--purple-100)',
  children: '❤️ 의견 감사합니다 :) ❤️',
};

export default Alert;
