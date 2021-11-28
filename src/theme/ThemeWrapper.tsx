import { Context } from '@context';
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';
import React, { ReactNode, useContext, useMemo } from 'react';

import { darkTheme, lightTheme, makeOverrides } from './themes';

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
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={activeTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeWrapper;
