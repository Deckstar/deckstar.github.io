import React, { ReactNode, useContext } from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { darkTheme, lightTheme } from './themes';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { Context } from '@context';

const Theme = (props: { children: ReactNode }) => {
  const { children } = props;
  const { darkMode } = useContext(Context);

  return (
    <ThemeProvider
      theme={responsiveFontSizes(
        createMuiTheme(darkMode ? darkTheme : lightTheme)
      )}
    >
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
