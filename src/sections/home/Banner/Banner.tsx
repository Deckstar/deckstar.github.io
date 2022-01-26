import socialLinks from '@data/socialLinks';
import { Button, Container, Link, Typography } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { map } from 'lodash';
import React from 'react';
import { scroller } from 'react-scroll';

import useStyles from './Banner.style';

interface SectionButtonProps {
  title: string;
  link: string;
}

const sectionButtons: SectionButtonProps[] = [
  {
    title: 'About',
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
  const { classes } = useStyles();

  return (
    <section id="banner" className={classes.section}>
      <div className={classes.background}>
        <Container className={classes.inner}>
          <StaticImage
            alt={t('Banner.DexterSibirtsev')}
            src="../../../images/photos/profile-pic.jpg"
            className={classes.profilePic}
          />

          <div className={classes.textContainer}>
            <Typography variant="h1" className={classes.nameHeader} paragraph>
              {t('Banner.DexterSibirtsev')}
            </Typography>
            <Typography variant="h3" paragraph>
              {t('Banner.SoftwareDeveloper')}
            </Typography>
            <Typography variant="h5">
              {t('Banner.HelloIAmAProgrammer')}
            </Typography>
          </div>

          <div className={classes.icons}>
            {map(socialLinks, (item) => {
              const { url, Icon, title } = item;
              return (
                <Link className={classes.icon} href={url} key={title}>
                  <Icon width={26} height={26} />
                </Link>
              );
            })}
          </div>

          <div className={classes.buttons}>
            {map(sectionButtons, (button) => {
              const { title, link } = button;
              return (
                <Button
                  color="grey"
                  className={classes.button}
                  variant="contained"
                  onClick={() => handleScrollTo(link)}
                  key={`banner button ${title}`}
                >
                  {t(`SectionButtons.${title}`)}
                </Button>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Banner;
