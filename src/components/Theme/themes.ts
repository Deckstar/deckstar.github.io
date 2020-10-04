import { ThemeOptions } from '@material-ui/core';
import { lightBlue, deepOrange } from '@material-ui/core/colors';

const commonTheme: ThemeOptions = {};

export const lightTheme: ThemeOptions = {
  ...commonTheme,
  palette: {
    type: 'light',
    primary: {
      main: lightBlue[400],
    },
    secondary: {
      main: deepOrange[400],
    },
  },
};

export const darkTheme: ThemeOptions = {
  ...commonTheme,
  palette: {
    type: 'dark',
    primary: {
      main: lightBlue[800],
    },
    secondary: {
      main: deepOrange[800],
    },
  },
};
