import resumePDF from '@assets/docs/Sibirtsev CV 2020.pdf';
import { ContactPage } from '@mui/icons-material';
import {
  Button,
  Card,
  CardContent,
  Container,
  Link,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import { StaticImage } from 'gatsby-plugin-image';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import useStyles from './About.style';

const yearsExperience = dayjs().diff(dayjs('2018-10-24'), 'year');

const About = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <section className={classes.container} id="about">
      <Container>
        <Typography variant="h3" className={classes.title}>
          {t('About.AboutMe')}
        </Typography>
        <div className={classes.twoRows}>
          <div className={classes.textSection}>
            <div className={classes.descriptionContainer}>
              <Trans i18nKey="About.Description">
                <Typography className={classes.paragraph}>
                  I am a self-taught programmer from Tallinn, Estonia.
                </Typography>
                <Typography className={classes.paragraph}>
                  I have been a developer for over {{ yearsExperience }} years.
                  Professionally, I mainly focus on creating{' '}
                  <span className={classes.bold}>websites</span> with React and
                  Django, and{' '}
                  <span className={classes.bold}>native mobile apps</span> with
                  React Native. In my free time I also work with other
                  programming tools.
                </Typography>
                <Typography className={classes.paragraph}>
                  My journey to programming may be an odd one. I started out my
                  career by living all over Europe and getting two degrees in
                  economics and finance, but I soon realized that the world of
                  finance wasn't for me. Instead, I decided to dive deeply into
                  programming and to switch fields to{' '}
                  <span className={classes.bold}>
                    full-time software and web development
                  </span>
                  .
                </Typography>
                <Typography className={classes.paragraph}>
                  I've always been{' '}
                  <span className={classes.bold}>
                    interested by a wide array of fields
                  </span>{' '}
                  — science, music, languages, to name a few — and with
                  programming I found that I could pursue all of those passions
                  at the same time. As a great bonus, I could also help people.
                  I hope we can work together!
                </Typography>
              </Trans>
            </div>
            <Link href={resumePDF} target="_blank" className={classes.cvLink}>
              <Button
                color="grey"
                variant="contained"
                style={{ marginBottom: '2em' }}
                id="cv"
                startIcon={<ContactPage />}
              >
                {t('About.ViewCV')}
              </Button>
            </Link>
          </div>

          <div>
            <Card elevation={3} className={classes.bigPhotoContainer}>
              <StaticImage
                alt={t('About.PhotoDescription')}
                src={'../../../images/photos/working.jpg'}
                className={classes.bigPhoto}
              />
              <CardContent>
                <Typography
                  color="textSecondary"
                  className={classes.bigPhotoCaption}
                >
                  {t('About.PhotoDescription')}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
