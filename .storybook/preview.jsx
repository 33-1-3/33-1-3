import { RecoilRoot } from 'recoil';
import { GlobalStyle } from '../src/styles/globalStyle';
import { NormalizeStyle } from '../src/styles/normalizeStyle';
import { withRouter } from 'storybook-addon-react-router-v6';
import ko from 'axe-core/locales/ko.json';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  design: {
    type: 'figspec',
    accessToken: import.meta.env.VITE_FIGMA_ACCESS_TOKEN,
  },

  a11y: {
    config: { locale: ko },
  },
};

export const decorators = [
  withRouter,
  (Story) => (
    <RecoilRoot>
      <NormalizeStyle />
      <GlobalStyle />
      <Story />
    </RecoilRoot>
  ),
];
