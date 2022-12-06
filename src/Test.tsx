import { GlobalStyle } from '@/common/styles/globalStyle';
import SquareButton from '@/common/components/SquareButton/SquareButton';

function Test() {
  return (
    <>
      <GlobalStyle />
      <SquareButton fontSize={'20px'} isBig isFilled>
        {'My Collections'}
      </SquareButton>
    </>
  );
}

export default Test;
