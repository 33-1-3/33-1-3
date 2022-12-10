import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import { GlobalStyle } from '@/common/styles/globalStyle';
import { NormalizeStyle } from '@/common/styles/normalizeStyle';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
    <GlobalStyle />
    <NormalizeStyle />
  </StrictMode>
);
