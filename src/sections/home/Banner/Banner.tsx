import socialLinks from '@data/socialLinks';
// @ts-ignore
import overlay3 from '@images/overlays/overlay3.svg';
import { Button, Container, Link, Typography } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { map } from 'lodash';
import React from 'react';

import { useSectionRefs, useSectionScrollers } from '../Context';
import useStyles from './Banner.style';

const sectionButtons = [
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
] as const;

const Banner = () => {
  const { t } = useTranslation();
  const { classes } = useStyles();
  const { banner } = useSectionRefs();
  const scrollers = useSectionScrollers();

  return (
    <section ref={banner} id="banner" className={classes.section}>
      <img src={overlay3} className={classes.background} alt="" />

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
            const handleScrollToSection = scrollers[link];

            return (
              <Button
                key={title}
                color="grey"
                className={classes.button}
                variant="contained"
                onClick={handleScrollToSection}
              >
                {t(`SectionButtons.${title}`)}
              </Button>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Banner;
