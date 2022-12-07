import { GlobalStyle } from '../src/common/styles/globalStyle';
import { NormalizeStyle } from '../src/common/styles/normalizeStyle';
import ko from 'axe-core/locales/ko.json';
import { BrowserRouter as Router } from 'react-router-dom';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    config: { locale: ko },
  },
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <NormalizeStyle />
      <Router>
        <Story />
      </Router>
    </>
  ),
];
