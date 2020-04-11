import {
  colors,
  createMuiTheme,
  Theme,
  ThemeOptions,
  ThemeProvider,
} from '@material-ui/core';
import React from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const theme: Theme = React.useMemo(
    () =>
      createMuiTheme({
        colors: {
          green: colors.green[600],
        },
      } as ThemeOptions),
    [],
  );

  return (
    <ThemeProvider theme={theme}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </ThemeProvider>
  );
}

export default App;
