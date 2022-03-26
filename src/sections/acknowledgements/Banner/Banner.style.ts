import { Theme } from '@mui/material/styles';
import { makeStyles } from '@theme/themes';

const useStyles = makeStyles()((theme: Theme) => ({
  section: {
    backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    position: 'relative',
  },
  background: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    pointerEvents: 'none',
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
