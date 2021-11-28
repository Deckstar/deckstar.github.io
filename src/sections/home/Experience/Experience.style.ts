import { Theme } from '@mui/material/styles';
import { makeStyles } from '@theme/themes';

const useStyles = makeStyles()((theme: Theme) => ({
  disclaimer: {
    fontSize: '0.9em',
  },
  container: {
    paddingBottom: '2em',
  },
  workAndEducation: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',

    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
    },
  },
}));

export default useStyles;
