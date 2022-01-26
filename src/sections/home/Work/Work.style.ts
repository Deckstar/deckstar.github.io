import { Theme } from '@mui/material/styles';
import { makeStyles } from '@theme/themes';

const lineSize = 3;
const bulletSize = 24;

const useStyles = makeStyles()((theme: Theme) => ({
  container: {
    padding: '30px 0',
  },
  title: {
    fontFamily: 'Caveat, "Roboto", "Helvetica", "Arial", sans-serif',
    letterSpacing: '0.01em',
    fontVariant: 'small-caps',
    marginBottom: theme.spacing(2),
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
}));

export default useStyles;
