import React from 'react';
import { FaGithub, FaGoodreads, FaTwitter } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { scroller } from 'react-scroll';
import { IconType } from 'react-icons';
import { Box, Button, Container, Link, Typography } from '@material-ui/core';
import { map } from 'lodash';
import { photos } from '@images';
import useStyles from './Banner.style';

interface SectionButtonProps {
  title: string;
  link: string;
}

interface SocialLinkProps {
  link: string;
  Icon: IconType;
}

const sectionButtons: SectionButtonProps[] = [
  {
    title: 'Home',
    link: 'banner',
  },
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
    title: 'Contact',
    link: 'contact',
  },
];

const socialLinks: SocialLinkProps[] = [
  {
    link: 'https://twitter.com/DexterSibirtsev',
    Icon: FaTwitter,
  },
  {
    link: 'https://github.com/Deckstar',
    Icon: FaGithub,
  },
  {
    link: 'https://www.goodreads.com/user/show/58196314-dexter',
    Icon: FaGoodreads,
  },
];

const handleScrollTo = (id: string) => {
  scroller.scrollTo(id, {
    offset: -50, // so navbar doesn't block view
    duration: 600,
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
            <Typography variant="h2">
              <Box fontWeight="bold">Dexter Sibirtsev</Box>
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
              const { link, Icon } = item;
              return (
                <Link
                  className={classes.icon}
                  href={link}
                  key={`social link ${i}`}
                >
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
