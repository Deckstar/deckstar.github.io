import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const lineSize = 3;
const bulletSize = 24;

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
    paragraph: {
      marginBottom: '1em',
    },

    itemsOuterContainer: {
      display: 'flex',
    },
    // make sure you use px units (not em) for this css logic, otherwise it won't align
    line: {
      borderRadius: `${lineSize / 2}px`,
      borderRight: `${lineSize}px solid ${theme.palette.text.secondary}`,
      marginLeft: `${bulletSize - lineSize}px`,
    },
    itemsContainer: {
      marginLeft: `-${bulletSize / 2 + lineSize / 2}px`,
    },
    // end px units
  })
);

export default useStyles;
