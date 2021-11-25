import { Context } from '@context';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import React, { ReactNode, useContext } from 'react';

import { darkTheme, lightTheme } from './themes';

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
