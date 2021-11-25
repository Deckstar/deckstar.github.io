import { createStyles, makeStyles } from '@material-ui/core/styles';

const bulletSize = 24;
const imageHeight = 40;

const useStyles = makeStyles(() =>
  createStyles({
    // make sure you use px units (not em) for this css logic, otherwise it won't align
    itemContainer: {
      display: 'flex',
      padding: '0.5px 0 1.5rem',
    },
    itemBulletContainer: {
      paddingTop: `calc(${imageHeight / 2}px - ${bulletSize / 2}px)`,
    },
    itemBullet: {
      width: `${bulletSize}px`,
      height: `${bulletSize}px`,
    },
    itemContent: {
      marginLeft: '2em',
    },
    // end px units
    firmLogo: {
      maxHeight: imageHeight,
      maxWidth: '100%',
      marginBottom: '0.5em',
    },
    title: {
      fontWeight: 'bold',
    },
    dates: {
      marginBottom: '1em',
    },
    description: {},
  })
);

export default useStyles;
