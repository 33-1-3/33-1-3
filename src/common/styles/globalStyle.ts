import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle/*css*/ `
  :root {
    /* color */
    --white: #ffffff;
    --black: #000000;
    --red: #fe2828;
    --purple-100: #ece2ff;
    --purple-900: #6c33e8;
    --gray-100: #dadada;
    --gray-200: #979797;
    --gray-300: #5e5e5e;
    --gray-400: #505050;

    /* drop shadow */
    --shadow-Header: 0px 2px 10px 0px rgba(0,0,0,0.3);
    --shadow-Item: 2px 2px 3px rgba(0,0,0,0.25);
    --shadow-Button-back: 0px 4px 10px 0px rgba(0,0,0,0.3);
    --shadow-Modal: 0px 4px 10px 0px rgba(0,0,0,0.5);
    --shadow-Vinyl: 4px 4px 10px 0px rgba(0,0,0,0.5);
    --shadow-Background: inset 4px 0px 10px 0px rgba(0,0,0,0.15);
    --shadow-catchphrase: 0px 2px 8px 0px rgba(0,0,0,1);

    /* text size */
    --text-xs: 12px;
    --text-sm: 14px;
    --text-bs: 16px;
    --text-md: 20px;
    --text-lg: 28px;
    --text-xl: 32px;
    --text-xxl: 44px;
    --text-xxxl: 56px;

    /* spacing */
    --space-xs: 8px;
    --space-sm: 12px;
    --space-bs: 16px;
    --space-md: 20px;
    --space-lg: 24px;
    --space-xl: 28px;
    --space-xxl: 32px; 
  }
`;
