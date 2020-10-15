import React from 'react';
import { Box, Link, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { overlays } from '@images';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '45px 30px',
      display: 'flex',
      flexDirection: 'column',
      gap: '2em',
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
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" id="footer" className={classes.container}>
      <Box className={classes.textContainer}>
        <Typography>
          &copy; 2019 – {currentYear} |{' '}
          <Link
            href="acknowledgements"
            underline="none"
            color="inherit"
            className={classes.link}
          >
            Acknowledgments
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
