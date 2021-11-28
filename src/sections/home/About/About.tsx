import resumePDF from '@assets/docs/Sibirtsev CV 2020.pdf';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Link,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import { graphql, useStaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import useStyles from './About.style';

const yearsExperience = dayjs().diff(dayjs('2018-10-24'), 'year');

const About = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const data = useStaticQuery(graphql`
    {
      photo: file(relativePath: { eq: "photos/working.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 610) {
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
    <Box component="section" className={classes.container} id="about">
      <Container>
        <Typography variant="h3" className={classes.title}>
          {t('About.AboutMe')}
        </Typography>
        <Box className={classes.twoRows}>
          <Box className={classes.textSection}>
            <Box textAlign="justify">
              <Trans i18nKey="About.Description">
                <Typography className={classes.paragraph}>
                  I am a self-taught programmer from Tallinn, Estonia.
                </Typography>
                <Typography className={classes.paragraph}>
                  I have been a developer for over {{ yearsExperience }} years.
                  Professionally, I mainly focus on creating{' '}
                  <Box component="span" fontWeight="bold">
                    websites
                  </Box>{' '}
                  with React and Django, and{' '}
                  <Box component="span" fontWeight="bold">
                    native mobile apps
                  </Box>{' '}
                  with React Native. In my free time I also work with other
                  programming tools.
                </Typography>
                <Typography className={classes.paragraph}>
                  My journey to programming may be an odd one. I started out my
                  career by living all over Europe and getting two degrees in
                  economics and finance, but I soon realized that the world of
                  finance wasn't for me. Instead, I decided to dive deeply into
                  programming and to switch fields to{' '}
                  <Box component="span" fontWeight="bold">
                    full-time software and web development
                  </Box>
                  .
                </Typography>
                <Typography className={classes.paragraph}>
                  I've always been{' '}
                  <Box component="span" fontWeight="bold">
                    interested by a wide array of fields
                  </Box>{' '}
                  — science, music, languages, to name a few — and with
                  programming I found that I could pursue all of those passions
                  at the same time. As a great bonus, I could also help people.
                  I hope we can work together!
                </Typography>
              </Trans>
            </Box>
            <Link href={resumePDF} target="_blank" className={classes.cvLink}>
              <Button
                color="grey"
                variant="contained"
                style={{ marginBottom: '2em' }}
                id="cv"
              >
                {t('About.ViewCV')}
              </Button>
            </Link>
          </Box>

          <Box className="col-6 col-12-medium imp-medium">
            <Card elevation={3} className={classes.bigPhotoContainer}>
              <GatsbyImage {...childImageSharp} className={classes.bigPhoto} />
              <CardContent>
                <Typography
                  color="textSecondary"
                  className={classes.bigPhotoCaption}
                >
                  {t('About.PhotoDescription')}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
