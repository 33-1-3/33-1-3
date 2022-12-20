import { ReactComponent as CSButton } from '@/assets/csbutton.svg';
import styled from 'styled-components';
import { useRef, useState, useEffect } from 'react';
import { Alert } from '@/common/components';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_YOUR_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_YOUR_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_YOUR_PUBLIC_KEY;

export interface StyledFloatingButtonProps {
  color: string;
  backgroundColor: string;
}

export interface FloatingButtonProps extends StyledFloatingButtonProps {
  width: string | number;
  height: string | number;
}

const FloatingButton = ({
  width,
  height,
  color,
  backgroundColor,
  ...props
}: FloatingButtonProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => setShowAlert(false), 3000);
    }
  }, [showAlert]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        (result) => {
          console.log(result.text);
          console.log('message send');
          setInputValue('');
          setShowAlert(true);
          setIsClicked(!isClicked);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };

  const toggleInput = (): void => {
    setIsClicked(!isClicked);
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const toggleInputByKeyUp = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Escape') {
      setInputValue('');
      setIsClicked(false);
    }
  };

  return (
    <>
      <StyledFloatingButton
        type="button"
        style={{ width, height }}
        color={color}
        backgroundColor={backgroundColor}
        onClick={toggleInput}
        {...props}
      >
        <CSButton width={width} height={height} />
      </StyledFloatingButton>
      {isClicked && (
        <StyledForm
          style={{ width: 200, height: 273 }}
          ref={form}
          onSubmit={sendEmail}
          onKeyUp={toggleInputByKeyUp}
        >
          <label className="srOnly" htmlFor="textMessage">
            Message
          </label>
          <StyledTextarea
            style={{ width: 168, height: 189 }}
            placeholder="의견 환영"
            name="message"
            value={inputValue}
            onChange={handleInput}
          />
          <StyledInput
            id="textMessage"
            type="submit"
            value="Send"
            color={color}
            style={{ width: 168, height: 36 }}
          />
        </StyledForm>
      )}
      {showAlert && <Alert />}
    </>
  );
};

const StyledFloatingButton = styled.button<StyledFloatingButtonProps>`
  position: fixed;
  right: 48px;
  bottom: 48px;
  z-index: 1000;
  filter: drop-shadow(var(--shadow-Button-back));
  circle {
    stroke: ${({ color }) => color};
    fill: ${({ backgroundColor }) => backgroundColor};
  }
  path {
    fill: ${({ color }) => color};
    stroke: ${({ color }) => color};
  }
`;

const StyledForm = styled.form`
  position: relative;
  position: fixed;
  padding: 16px;
  right: 52px;
  bottom: 112px;
  border-radius: 8px;
  box-sizing: border-box;
  background: linear-gradient(180deg, #6c33e8 0%, #d8c6ff 100%);
  z-index: 2000;
`;

const StyledTextarea = styled.textarea`
  position: absolute;
  resize: none;
  border-radius: 8px;
  padding: 6px;
`;

const StyledInput = styled.input<{ color: string }>`
  position: absolute;
  bottom: 16px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 18px;
  color: var(--white);
  background: ${({ color }) => color};
  cursor: pointer;
`;

FloatingButton.defaultProps = {
  width: 40,
  height: 40,
  color: 'var(--purple-900)',
  backgroundColor: 'var(--white)',
};

export default FloatingButton;
