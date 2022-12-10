import { BrowserRouter as Router } from 'react-router-dom';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { GlobalStyle } from '@/common/styles/globalStyle';
import { NormalizeStyle } from '@/common/styles/normalizeStyle';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <StrictMode>
      <NormalizeStyle />
      <GlobalStyle />
      <App />
    </StrictMode>
  </Router>
);
