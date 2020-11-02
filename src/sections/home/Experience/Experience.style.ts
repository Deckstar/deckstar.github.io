import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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

      [theme.breakpoints.down('xs')]: {
        gridTemplateColumns: '1fr',
      },
    },
  })
);

export default useStyles;
