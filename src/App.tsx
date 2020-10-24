import React from 'react';

import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyles from './styles/global';

const App = () => (
  <ThemeProvider theme={theme}>
    <h1>Hello Mission Brasil</h1>
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
