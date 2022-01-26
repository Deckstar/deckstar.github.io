import { overlays } from '@images';
import { Link, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@theme/themes';
import dayjs from 'dayjs';
import {
  Link as GatsbyLink,
  useTranslation,
} from 'gatsby-plugin-react-i18next';
import React from 'react';

const useStyles = makeStyles()((theme: Theme) => ({
  container: {
    padding: '45px 30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${overlays.overlay3.default})`,
    backgroundSize: 'cover',
    position: 'relative',

    '&::before': {
      backgroundImage: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: -1,
      height: '100%',
      width: '100%',
    },
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    borderBottomWidth: 1,
    borderBottomStyle: 'dotted',
    '&:hover': {
      borderBottomWidth: 0,
    },
  },
}));

const Footer = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();
  const currentYear = dayjs().format('YYYY');

  return (
    <footer id="footer" className={classes.container}>
      <div className={classes.textContainer}>
        <Typography>
          &copy; 2019 – {currentYear} |{' '}
          <Link
            component={GatsbyLink}
            to="/acknowledgements"
            underline="none"
            color="inherit"
            className={classes.link}
          >
            {t('PageLinks.Acknowledgements')}
          </Link>
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
