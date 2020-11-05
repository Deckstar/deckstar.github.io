import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '30px 0',
    },
    title: {
      fontFamily: 'Mistral, "Roboto", "Helvetica", "Arial", sans-serif',
      letterSpacing: '0.05em',
      fontVariant: 'small-caps',
      marginBottom: '0.5em',
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
  })
);

export default useStyles;
