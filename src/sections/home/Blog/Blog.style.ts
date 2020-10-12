import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      background: `linear-gradient(to right bottom, ${theme.palette.primary.contrastText} 35%, ${theme.palette.secondary.contrastText} 100%)`,
      padding: '75px 0',
      borderRadius: '400% 100% / 30%',
      overflow: 'hidden',

      [theme.breakpoints.up('lg')]: {
        padding: '105px 20px 100px',
        borderRadius: '400% 120% / 1000%;',
      },

      [theme.breakpoints.down('sm')]: {
        padding: '50px 0',
        borderRadius: '400% 200% / 10%',
      },
    },
    title: {
      marginBottom: '0.5em',
    },
    postsContainer: {
      display: 'flex',
      flexWrap: 'nowrap',
      gap: '2em',
      overflowX: 'auto',
      padding: '2rem 1rem',
    },

    cardContainer: {
      flex: '0 0 auto',
      width: '92.5%',
      maxWidth: '24rem',
      display: 'flex',
      flexDirection: 'column',
    },
    cardPhoto: {
      height: 0,
      // paddingTop: '56.25%', // 16:9
      paddingTop: `${(1 / 2 ** (1 / 2)) * 100}%`, // 𝜑 (golden ratio)
      maxWidth: '100%',
    },
    cardContent: {
      flexGrow: 1,
      alignItems: 'center',

      '&:last-child': {
        padding: '8px 16px 16px',
      },
    },
    cardTitle: {
      fontWeight: 'bold',
    },
    cardDateContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5em',
      fontSize: '0.9em',
      marginBottom: '1em',
    },
    cardDate: {
      fontSize: 'inherit',
    },
    cardCaption: {},
    cardFooter: {
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: '1em',
    },
    cardButtons: {
      display: 'flex',
      alignItems: 'center',
    },
    cardHeartCount: {
      color: theme.palette.text.primary,
    },
    cardArticleTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0 1em',
      justifyContent: 'flex-end',
    },
    cardTag: {
      fontWeight: 'bold',
    },

    dummyDivForPaddingToWork: {
      color: 'rgba(0, 0, 0, 0)',
    },
  })
);

export default useStyles;
