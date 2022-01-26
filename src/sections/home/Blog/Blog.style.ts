import { Theme } from '@mui/material/styles';
import { makeStyles } from '@theme/themes';

const useStyles = makeStyles()((theme: Theme) => ({
  container: {
    background: `linear-gradient(to right bottom, ${theme.palette.primary.contrastText} 35%, ${theme.palette.secondary.contrastText} 100%)`,
    padding: '75px 0',
    borderRadius: '400% 100% / 10%',
    overflow: 'hidden',

    [theme.breakpoints.up('md')]: {
      padding: '105px 20px 100px',
      borderRadius: '50% / 5%',
    },

    [theme.breakpoints.down('lg')]: {
      padding: '50px 0',
      borderRadius: '400% 200% / 40%',
    },
  },
  title: {
    fontFamily: 'Caveat, "Roboto", "Helvetica", "Arial", sans-serif',
    letterSpacing: '0.01em',
    fontVariant: 'small-caps',
    marginBottom: theme.spacing(2),
  },
  postsContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    padding: '2rem 1rem',
  },

  cardContainer: {
    marginRight: '1.5rem',
    flex: '0 0 auto',
    width: '92.5%',
    maxWidth: '24rem',
    display: 'flex',
    flexDirection: 'column',
  },
  cardPhotoContainer: {
    position: 'relative',
  },
  cardPhoto: {
    height: 0,
    // paddingTop: '56.25%', // 16:9
    paddingTop: `${(1 / 2 ** (1 / 2)) * 100}%`, // 𝜑 (golden ratio)
    maxWidth: '100%',
  },
  cardPhotoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: '.5s ease',

    '&:hover': {
      opacity: 1,
    },
  },
  cardPhotoLinkIcon: {
    fontSize: '6em',
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
    justifyContent: 'flex-end',
  },
  cardTag: {
    marginLeft: '1em',
    fontWeight: 'bold',
  },

  dummyDivForPaddingToWork: {
    color: 'rgba(0, 0, 0, 0)',
  },
}));

export default useStyles;
