import { alpha, Theme, ThemeOptions } from '@mui/material';
import { deepOrange, grey, lightBlue, orange } from '@mui/material/colors';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    grey: true;
  }
}

declare module '@mui/material' {
  interface Color {
    dark: string;
    light: string;
    main: string;
  }
}

const commonTheme: ThemeOptions = {
  palette: {
    grey: {
      dark: grey[400],
      light: grey[200],
      main: grey[300],
    },
  },
};

export const lightTheme: ThemeOptions = {
  ...commonTheme,
  palette: {
    ...commonTheme.palette,
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
    ...commonTheme.palette,
    background: {
      default: '#303030',
      paper: '#424242',
    },
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

export const makeOverrides = (theme: Theme) => {
  const { palette } = theme;
  const { action, getContrastText, grey: greyColors, mode, text } = palette;

  const themeOverrides: ThemeOptions = {
    components: {
      MuiAppBar: {
        defaultProps: {
          enableColorOnDark: true,
        },
      },
      MuiButton: {
        variants: [
          {
            props: { variant: 'contained', color: 'grey' },
            style: {
              color: getContrastText(greyColors[300]),
            },
          },
          {
            props: { variant: 'outlined', color: 'grey' },
            style: {
              color: text.primary,
              borderColor:
                mode === 'light'
                  ? 'rgba(0, 0, 0, 0.23)'
                  : 'rgba(255, 255, 255, 0.23)',
              '&.Mui-disabled': {
                border: `1px solid ${action.disabledBackground}`,
              },
              '&:hover': {
                borderColor:
                  mode === 'light'
                    ? 'rgba(0, 0, 0, 0.23)'
                    : 'rgba(255, 255, 255, 0.23)',
                backgroundColor: alpha(text.primary, action.hoverOpacity),
              },
            },
          },
          {
            props: { variant: 'text', color: 'grey' },
            style: {
              color: text.primary,
              '&:hover': {
                backgroundColor: alpha(text.primary, action.hoverOpacity),
              },
            },
          },
        ],
      },
      MuiLink: {
        defaultProps: {
          underline: 'hover',
        },
      },
    },
  };

  return themeOverrides;
};
