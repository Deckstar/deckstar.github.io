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
  drawerMenu: {
    display: 'flex',
    flexDirection: 'column',
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
}));

export default useStyles;
