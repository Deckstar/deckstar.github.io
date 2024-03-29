// @ts-ignore
import overlay3 from '@images/overlays/overlay3.svg';
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
    backgroundImage: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
    position: 'relative',
  },
  background: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    pointerEvents: 'none',
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
      <img src={overlay3} className={classes.background} alt="" />

      <div className={classes.textContainer}>
        <Typography>
          &copy; 2019 – {currentYear} |{' '}
          <Link
            component={GatsbyLink}
            to="/acknowledgements"
            underline="hover"
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
