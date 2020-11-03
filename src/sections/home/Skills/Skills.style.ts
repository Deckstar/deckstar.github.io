import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      background: `linear-gradient(to right bottom, ${theme.palette.primary.contrastText} 35%, ${theme.palette.secondary.contrastText} 100%)`,
      padding: '75px 0',
      borderRadius: '400% 100% / 20%',
      overflow: 'hidden',

      [theme.breakpoints.up('md')]: {
        padding: '105px 20px 100px',
        borderRadius: '50% / 5%',
      },

      [theme.breakpoints.down('sm')]: {
        padding: '50px 0',
        borderRadius: '400% 200% / 10%',
      },
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
      rowGap: '1em',
    },
    skillCategory: {},
    bigIconsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      listStyle: 'none',
      paddingLeft: 0,
    },
    bigIconListItem: {
      display: 'inline-block',
      padding: '2.5em',
      textAlign: 'center',
    },
    bigIconOutline: {
      borderRadius: 10,
      border: `solid 1px ${theme.palette.text.primary}`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '8em',
      lineHeight: '8em',
      margin: 0,
      textAlign: 'center',
      width: '8em',
      transform: 'rotate(45deg)',
    },
    bigIcon: {
      transform: 'rotate(-45deg)',
      display: 'inline-block',
      lineHeight: 'inherit',
    },
    textSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1em',
    },
    skillsGrid: {
      margin: '1.5em 0',
      '& > div': {
        outline: 'none',
      },
    },
  })
);

export default useStyles;
