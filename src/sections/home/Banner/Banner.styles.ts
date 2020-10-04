import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { overlays } from '@images';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inner: {
      padding: 30,
      display: 'flex',
      flexDirection: 'column',
      gap: '2em',
      justifyContent: 'center',
      alignItems: 'center',
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
    textContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5em',
      justifyContent: 'center',
      alignItems: 'center',
    },
    profilePic: {
      height: '7em',
      width: '7em',
      borderRadius: '50%',
      marginTop: '1em',
    },
    icons: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '2em',
    },
    icon: {
      color: theme.palette.grey[400],
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
