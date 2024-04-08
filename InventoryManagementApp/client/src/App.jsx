import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from '../MainRouter';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../theme';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <MainRouter />
        <CssBaseline />
      </ThemeProvider>
    </Router>
  );
};
export default App;
