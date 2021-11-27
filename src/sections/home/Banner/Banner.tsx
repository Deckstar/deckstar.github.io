import socialLinks from '@data/socialLinks';
import { Box, Button, Container, Link, Typography } from '@mui/material';
import { graphql, useStaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image';
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
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    {
      photo: file(relativePath: { eq: "photos/profile-pic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 180) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const {
    photo: { childImageSharp },
  } = data;

  return (
    <Box component="section" id="banner">
      <Box className={classes.background}>
        <Container className={classes.inner}>
          <GatsbyImage {...childImageSharp} className={classes.profilePic} />
          <Box className={classes.textContainer}>
            <Typography variant="h1" className={classes.nameHeader} paragraph>
              {t('Banner.DexterSibirtsev')}
            </Typography>
            <Typography variant="h3" paragraph>
              {t('Banner.SoftwareDeveloper')}
            </Typography>
            <Typography variant="h5">
              {t('Banner.HelloIAmAProgrammer')}
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
            {map(sectionButtons, (button) => {
              const { title, link } = button;
              return (
                <Button
                  className={classes.button}
                  variant="contained"
                  onClick={() => handleScrollTo(link)}
                  key={`banner button ${title}`}
                >
                  {t(`SectionButtons.${title}`)}
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
