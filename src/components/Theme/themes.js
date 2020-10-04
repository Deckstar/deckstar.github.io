import { lightBlue, deepOrange } from '@material-ui/core/colors';

export const lightTheme = {
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

export const darkTheme = {
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
