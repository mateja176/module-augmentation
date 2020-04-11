import {
  colors,
  createMuiTheme,
  Theme,
  ThemeOptions,
  ThemeProvider,
} from '@material-ui/core';
import React from 'react';
import './App.css';
import { Hello } from './Hello';

interface WithColors {
  colors: {
    green: string;
  };
}

declare module '@material-ui/core/styles' {
  interface Theme extends WithColors {}
}

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
      <Hello />
    </ThemeProvider>
  );
}

export default App;
