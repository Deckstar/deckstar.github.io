import { Context } from '@context';
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  StyledEngineProvider,
  Theme,
  ThemeProvider,
} from '@mui/material';
import React, { ReactNode, useContext } from 'react';

import { darkTheme, lightTheme } from './themes';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const ThemeWrapper = (props: { children: ReactNode }) => {
  const { children } = props;
  const { darkMode } = useContext(Context);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider
        theme={responsiveFontSizes(
          createTheme(darkMode ? darkTheme : lightTheme)
        )}
      >
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeWrapper;
