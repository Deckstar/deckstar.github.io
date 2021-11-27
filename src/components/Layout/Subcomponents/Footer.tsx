import { overlays } from '@images';
import { Box, Link, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import dayjs from 'dayjs';
import {
  Link as GatsbyLink,
  useTranslation,
} from 'gatsby-plugin-react-i18next';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '45px 30px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `url(${overlays.overlay3})`,
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
  })
);

const Footer = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const currentYear = dayjs().format('YYYY');

  return (
    <Box component="footer" id="footer" className={classes.container}>
      <Box className={classes.textContainer}>
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
      </Box>
    </Box>
  );
};

export default Footer;
