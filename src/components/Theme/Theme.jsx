import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { darkTheme } from './themes';
import { createMuiTheme } from '@material-ui/core/styles';

const Theme = (props) => {
  const { children } = props;

  return (
    <ThemeProvider theme={createMuiTheme(darkTheme)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
