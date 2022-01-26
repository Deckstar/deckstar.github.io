import { makeStyles } from '@theme/themes';

const bulletSize = 24;
const imageHeight = 40;

const useStyles = makeStyles()((theme) => ({
  // make sure you use px units (not em) for this css logic, otherwise it won't align
  itemContainer: {
    display: 'flex',
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(3),
  },
  itemBulletContainer: {
    paddingTop: `calc(${imageHeight / 2}px - ${bulletSize / 2}px)`,
  },
  itemBullet: {
    width: `${bulletSize}px`,
    height: `${bulletSize}px`,
  },
  itemContent: {
    marginLeft: theme.spacing(4),
  },
  // end px units
  logo: {
    maxHeight: imageHeight,
    maxWidth: '100%',
    marginBottom: theme.spacing(1),
  },
  title: {
    fontWeight: 'bold',
  },
  rows: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.25),
    marginBottom: theme.spacing(2),
  },
  row: {
    display: 'flex',
    gap: theme.spacing(1),
    alignItems: 'center',
  },
  location: {
    fontStyle: 'italic',
  },
  description: {},
}));

export default useStyles;
