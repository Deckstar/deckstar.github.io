import { Theme } from '@mui/material/styles';
import { makeStyles } from '@theme/themes';

const useStyles = makeStyles()((theme: Theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  languageSelect: {
    padding: '0px !important',
    backgroundColor: 'unset !important',
  },
  drawerContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  drawerLogoContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  drawerLogo: {
    margin: '1em',
    width: '4em',
    height: '4em',
  },
  drawerFooter: {
    padding: '8px 16px',
    display: 'flex',
    justifyContent: 'center',
  },
  socialLink: {
    margin: '0 0.5em',

    '&:hover': {
      opacity: 0.7,
    },
  },
}));

export default useStyles;
