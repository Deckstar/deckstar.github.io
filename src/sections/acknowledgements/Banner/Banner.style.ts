import { overlays } from '@images';
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@theme/themes';

const useStyles = makeStyles()((theme: Theme) => ({
  section: {
    backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },
  background: {
    backgroundImage: `url(${overlays.overlay3.default})`,
    backgroundSize: 'cover',
    position: 'relative',
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
}));

export default useStyles;
