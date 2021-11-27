import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  })
);

export default useStyles;
