import { ThemeOptions } from '@material-ui/core';
import { lightBlue, deepOrange } from '@material-ui/core/colors';

const commonTheme: ThemeOptions = {};

export const lightTheme: ThemeOptions = {
  ...commonTheme,
  palette: {
    type: 'light',
    primary: {
      main: lightBlue[400],
      contrastText: lightBlue[100],
    },
    secondary: {
      main: deepOrange[400],
      contrastText: deepOrange[200],
    },
  },
};

export const darkTheme: ThemeOptions = {
  ...commonTheme,
  palette: {
    type: 'dark',
    primary: {
      main: lightBlue[800],
      contrastText: lightBlue[900],
    },
    secondary: {
      main: deepOrange[800],
      contrastText: deepOrange[900],
    },
  },
};
