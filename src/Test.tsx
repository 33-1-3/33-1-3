import { GlobalStyle } from '@/common/styles/globalStyle';
import SearchInput from '@/common/components/SearchInput/SearchInput';

function Test() {
  return (
    <>
      <GlobalStyle />
      <SearchInput
        placeholder="검색어를 입력하세요."
        page={'전체'}
        width={516}
      ></SearchInput>
    </>
  );
}

export default Test;
