import React, { ReactNode } from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { darkTheme } from './themes';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const Theme = (props: { children: ReactNode }) => {
  const { children } = props;

  return (
    <ThemeProvider theme={responsiveFontSizes(createMuiTheme(darkTheme))}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
