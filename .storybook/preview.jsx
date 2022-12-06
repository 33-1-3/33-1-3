import { GlobalStyle } from '../src/common/styles/globalStyle';
import { NormalizeStyle } from '../src/common/styles/normalizeStyle';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
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
