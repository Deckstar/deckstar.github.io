import { Theme } from '@mui/material/styles';
import { makeStyles } from '@theme/themes';

const useStyles = makeStyles()((theme: Theme) => ({
  container: {
    padding: '30px 0',
  },
  title: {
    fontFamily: 'Caveat, "Roboto", "Helvetica", "Arial", sans-serif',
    letterSpacing: '0.01em',
    fontVariant: 'small-caps',
    marginBottom: theme.spacing(2),
  },
  twoRows: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr',
    },
    columnGap: '2em',
  },
  textSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  descriptionContainer: {
    textAlign: 'justify',
  },
  paragraph: {
    marginBottom: '1em',
  },
  cvLink: {
    alignSelf: 'center',
  },
  bigPhotoContainer: {},
  bigPhoto: {
    height: 0,
    // paddingTop: '56.25%', // 16:9
    paddingTop: '60%', // 5:3
    // paddingTop: `${(1 / 2 ** (1 / 2)) * 100}%`, // 𝜑 (golden ratio)
    maxWidth: '100%',
  },
  bigPhotoCaption: {
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
}));

export default useStyles;
