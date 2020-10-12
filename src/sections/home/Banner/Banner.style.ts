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
      gap: '2em',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '4rem',
      paddingBottom: '1rem',
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5em',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    nameHeader: {
      fontFamily: 'Mistral',
      fontVariant: 'small-caps',
    },
    profilePic: {
      height: '7em',
      width: '7em',
      borderRadius: '50%',
    },
    icons: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '2em',
    },
    icon: {
      color: theme.palette.grey[400],
      '&:hover': {
        color: theme.palette.grey[500],
      },
    },
    buttons: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '2em',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);

export default useStyles;
