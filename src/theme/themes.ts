import { ThemeOptions } from '@mui/material';
import { deepOrange, lightBlue, orange } from '@mui/material/colors';

const commonTheme: ThemeOptions = {};

export const lightTheme: ThemeOptions = {
  ...commonTheme,
  palette: {
    mode: 'light',
    primary: {
      main: lightBlue[400],
      contrastText: lightBlue[100],
    },
    secondary: {
      main: orange[400],
      contrastText: orange[200],
    },
  },
};

export const darkTheme: ThemeOptions = {
  ...commonTheme,
  palette: {
    mode: 'dark',
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
