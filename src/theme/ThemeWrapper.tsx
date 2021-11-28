import { Context } from '@context';
import { CacheProvider } from '@emotion/react';
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material';
import React, { ReactNode, useContext, useMemo } from 'react';

import { darkTheme, lightTheme, makeOverrides, muiCache } from './themes';

const ThemeWrapper = (props: { children: ReactNode }) => {
  const { children } = props;
  const { darkMode } = useContext(Context);

  const activeTheme = useMemo(() => {
    const colorTheme = darkMode ? darkTheme : lightTheme;

    const generatedTheme = createTheme(colorTheme);
    const themeOverrides = makeOverrides(generatedTheme);

    const combinedTheme = createTheme(generatedTheme, themeOverrides);

    const responsiveTheme = responsiveFontSizes(combinedTheme);
    return responsiveTheme;
  }, [darkMode]);

  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={activeTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default ThemeWrapper;
