import styled, { css } from 'styled-components';

export interface AlertProps {
  type: 'top' | 'bottomRight';
  width?: string | number;
  textColor?: string;
  backgroundColor?: string;
  children: string;
}

function Alert({
  type,
  width,
  textColor,
  backgroundColor,
  children,
}: AlertProps) {
  return (
    <StyledAlert
      type={type}
      role="alert"
      style={{ width }}
      textColor={textColor}
      backgroundColor={backgroundColor}
    >
      {children}
    </StyledAlert>
  );
}

Alert.defaultProps = {
  width: '100vw',
  textColor: 'var(--purple-900)',
  backgroundColor: 'var(--purple-100)',
};

const ALERT_STYLE = {
  top: css`
    top: 0;
    left: 50%;

    @keyframes top {
      0% {
        transform: translate3D(-50%, -100%, 0);
      }
      15%,
      85% {
        transform: translate3D(-50%, 0, 0);
      }
      100% {
        transform: translate3D(-50%, -100%, 0);
      }
    }
  `,
  bottomRight: css`
    bottom: 112px;
    right: 0;
    border-radius: 4px 0 0 4px;

    @keyframes bottomRight {
      0% {
        transform: translate3D(100%, 0, 0);
      }
      15%,
      85% {
        transform: translate3D(0, 0, 0);
      }
      100% {
        transform: translate3D(100%, 0, 0);
      }
    }
  `,
};

const StyledAlert = styled.div<AlertProps>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: fit-content;
  color: ${({ textColor }) => textColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  word-break: break-all;
  z-index: 3000;

  ${({ type }) => ALERT_STYLE[type]}
  animation: ${({ type }) => `${type} 3s both`};

  &:empty {
    display: none;
  }
`;

export default Alert;
