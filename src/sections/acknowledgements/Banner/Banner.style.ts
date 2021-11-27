import { overlays } from '@images';
import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

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
      minHeight: '30rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textContainer: {
      maxWidth: '40rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    heading: {
      marginBottom: '1em',
    },
  })
);

export default useStyles;
