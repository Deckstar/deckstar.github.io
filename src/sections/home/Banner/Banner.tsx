import React from 'react';
import { FaGithub, FaGoodreads, FaTwitter } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Box, Button, Link, Typography } from '@material-ui/core';
import { photos } from '@images';
import useStyles from './Banner.styles';

const Banner = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Box component="section" id="header">
      <Box className={classes.inner}>
        <img className={classes.profilePic} src={photos.profilePic} />
        <Box className={classes.textContainer}>
          <Typography variant="h4">
            <Box fontWeight="bold">Dexter Sibirtsev</Box>
          </Typography>
          <Typography variant="h4">{t('Banner.SoftwareDeveloper')}</Typography>
          <Typography>
            Hello! I am a professional programmer, specializing in websites &
            mobile apps.
          </Typography>
        </Box>

        <Box className={classes.icons}>
          <Link
            href="https://twitter.com/DexterSibirtsev"
            className={classes.icon}
          >
            <FaTwitter size={26} />
          </Link>
          <Link href="https://github.com/Deckstar" className={classes.icon}>
            <FaGithub size={26} />
          </Link>
          <Link
            href="https://www.goodreads.com/user/show/58196314-dexter"
            className={classes.icon}
          >
            <FaGoodreads size={26} />
          </Link>
        </Box>

        <Box className={classes.buttons}>
          <Link href="#about" className="button">
            <Button variant="contained">About Me & CV</Button>
          </Link>
          <Link href="#skills" className="button">
            <Button variant="contained">Skills</Button>
          </Link>
          <Link href="#education" className="button">
            <Button variant="contained">Education</Button>
          </Link>
          <Link href="#contact" className="button">
            <Button variant="contained">Contact</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
