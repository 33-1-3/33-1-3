import { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import { GlobalStyle } from '@/common/styles/globalStyle';
import { NormalizeStyle } from '@/common/styles/normalizeStyle';
import { ScrollToTop } from '@/common/components';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RecoilRoot>
      <Router>
        <NormalizeStyle />
        <GlobalStyle />
        <ScrollToTop />
        <App />
      </Router>
    </RecoilRoot>
  </StrictMode>
);
