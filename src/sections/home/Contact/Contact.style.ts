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
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
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
  })
);

export default useStyles;
