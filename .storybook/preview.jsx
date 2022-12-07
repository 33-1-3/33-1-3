import { GlobalStyle } from '../src/common/styles/globalStyle';
import { NormalizeStyle } from '../src/common/styles/normalizeStyle';
import ko from 'axe-core/locales/ko.json';

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
      <Story />
    </>
  ),
];
