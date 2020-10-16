import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '30px 0',
      border: `solid ${theme.palette.divider}`,
      borderTopWidth: 1,
      borderBottomWidth: 1,
    },
    title: {
      fontFamily: 'Mistral',
      letterSpacing: '0.05em',
      fontVariant: 'small-caps',
      marginBottom: '0.5em',
    },
    twoRows: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '2em',
    },
    textSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1em',
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
  })
);

export default useStyles;
