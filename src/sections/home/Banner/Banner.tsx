import React from 'react';
import { useTranslation } from 'react-i18next';
import { scroller } from 'react-scroll';
import { Box, Button, Container, Link, Typography } from '@material-ui/core';
import { map } from 'lodash';
import { photos } from '@images';
import socialLinks from '@data/socialLinks';
import useStyles from './Banner.style';

interface SectionButtonProps {
  title: string;
  link: string;
}

const sectionButtons: SectionButtonProps[] = [
  {
    title: 'About/CV',
    link: 'about',
  },
  {
    title: 'Skills',
    link: 'skills',
  },
  {
    title: 'Experience',
    link: 'experience',
  },
  {
    title: 'Blog',
    link: 'blog',
  },
  {
    title: 'Contact',
    link: 'contact',
  },
];

const handleScrollTo = (id: string) => {
  scroller.scrollTo(id, {
    offset: -50, // so navbar doesn't block view
    smooth: true,
  });
};

const Banner = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Box component="section" id="banner">
      <Box className={classes.background}>
        <Container className={classes.inner}>
          <img className={classes.profilePic} src={photos.profilePic} />
          <Box className={classes.textContainer}>
            <Typography variant="h1" className={classes.nameHeader}>
              {t('Banner.DexterSibirtsev')}
            </Typography>
            <Typography variant="h3">
              {t('Banner.SoftwareDeveloper')}
            </Typography>
            <Typography variant="h5">
              Hello! I am a professional programmer, specializing in websites
              &amp; mobile apps.
            </Typography>
          </Box>

          <Box className={classes.icons}>
            {map(socialLinks, (item, i) => {
              const { url, Icon } = item;
              return (
                <Link className={classes.icon} href={url} key={`social ${i}`}>
                  <Icon size={26} />
                </Link>
              );
            })}
          </Box>

          <Box className={classes.buttons}>
            {map(sectionButtons, (button, i) => {
              const { title, link } = button;
              return (
                <Button
                  variant="contained"
                  onClick={() => handleScrollTo(link)}
                  key={`banner button ${i}`}
                >
                  {title}
                </Button>
              );
            })}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Banner;
