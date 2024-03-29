import { Theme } from '@mui/material/styles';
import { makeStyles } from '@theme/themes';

const useStyles = makeStyles()((theme: Theme) => ({
  container: {
    paddingTop: theme.spacing(4),
  },
  title: {
    fontFamily: 'Caveat, "Roboto", "Helvetica", "Arial", sans-serif',
    letterSpacing: '0.01em',
    fontVariant: 'small-caps',
    marginBottom: theme.spacing(2),
  },
  twoRows: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  reverse: {
    flexDirection: 'row-reverse',
  },
  bold: { fontWeight: 'bold' },
  textSection: {
    display: 'flex',
    flexDirection: 'column',
    width: '48%',
    flexGrow: 1,
  },
  paragraph: {
    marginBottom: '1em',
  },
  listItem: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  bigPhotoContainer: {
    width: '48%',
    flexGrow: 1,
    minWidth: '12rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '2em',
  },
  bigPhotoCard: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bigPhoto: {
    width: '100%',
  },
  bigPhotoCaption: {
    textAlign: 'center',
  },
}));

export default useStyles;
