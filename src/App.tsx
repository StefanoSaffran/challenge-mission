import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyles from './styles/global';
import AppProvider from './contexts';
import Routes from './routes';

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Routes />
        <GlobalStyles />
      </AppProvider>
    </ThemeProvider>
  </Router>
);

export default App;
