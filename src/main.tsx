import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ScrollToTop } from '@/components';
import { GlobalStyle } from '@/styles/globalStyle';
import { NormalizeStyle } from '@/styles/normalizeStyle';
import App from '@/App';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Router>
      <RecoilRoot>
        <ScrollToTop />
        <GlobalStyle />
        <NormalizeStyle />
        <App />
      </RecoilRoot>
    </Router>
  </StrictMode>
);
