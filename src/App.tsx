import React from 'react';

import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyles from './styles/global';
import Register from './pages/Register';

const App = () => (
  <ThemeProvider theme={theme}>
    <Register />
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
