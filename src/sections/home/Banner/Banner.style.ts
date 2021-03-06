import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { overlays } from '@images';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
      backgroundImage: `url(${overlays.overlay3})`,
      backgroundSize: 'cover',
      position: 'relative',

      '&::before': {
        backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        content: '""',
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: -1,
        height: '100%',
        width: '100%',
      },
    },
    inner: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '5rem',
      paddingBottom: '1rem',
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      maxWidth: '50rem',
    },
    nameHeader: {
      fontWeight: 'bold',
      letterSpacing: '0.05em',
      fontFamily: 'Mistral, "Roboto", "Helvetica", "Arial", sans-serif',
      fontVariant: 'small-caps',
    },
    profilePic: {
      [theme.breakpoints.up('sm')]: {
        height: '9em',
        width: '9em',
      },
      [theme.breakpoints.up('md')]: {
        height: '12em',
        width: '12em',
      },
      [theme.breakpoints.up('lg')]: {
        height: '15em',
        width: '15em',
      },

      marginBottom: '1.25rem',
      height: '7em',
      width: '7em',
      borderRadius: '50%',
    },
    icons: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    icon: {
      margin: '1em',
      color: theme.palette.grey[400],
      '&:hover': {
        color: theme.palette.grey[500],
      },
    },
    buttons: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      margin: '1em',
    },
  })
);

export default useStyles;
