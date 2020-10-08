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
    innerContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    comingSoonText: {
      fontFamily: 'Marck Script',
      width: 'min-content',
      textAlign: 'center',
    },
  })
);

export default useStyles;
