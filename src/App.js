import React, { useContext } from 'react';
import './App.scss';

import Header from './container/Header';
import { ThemeContext } from './theme/ThemeContext';

import { Paper } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const App = () => {
  // value come from theme context that we created as common storage and easy to access value through whole project
  const [theme, setTheme] = useContext(ThemeContext);

  // style for dark theme
  // to use dark theme Paper component is neccessary to switch between dark and light themes
  const darkMode = createMuiTheme({
    palette: {
      type: 'dark',
    },
    Paper: {},
  });

  // By default there will be light theme
  const lightMode = createMuiTheme({});

  return (
    // ThemProvider is come from material ui which change material ui components according to dark and light theme
    <ThemeProvider theme={theme === 'dark' ? darkMode : lightMode}>
      <div className={` App`}>
        <Paper style={{ height: '100vh' }}>
          <Header />
        </Paper>
      </div>
    </ThemeProvider>
  );
};

export default App;
