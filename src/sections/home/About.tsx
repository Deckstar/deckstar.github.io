import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Link,
  Typography,
} from '@material-ui/core';
import { photos } from '@images';
import resumePDF from '@assets/docs/Sibirtsev CV.pdf';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: 30,
    },
    title: {
      marginBottom: '0.5em',
    },
    twoRows: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: '1fr 1fr',
      },
      columnGap: '2em',
    },
    textSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1em',
    },
    paragraph: {
      marginBottom: '1em',
    },
    bigPhotoContainer: {},
    bigPhoto: {
      height: 0,
      // paddingTop: '56.25%', // 16:9
      paddingTop: `${(1 / 2 ** (1 / 2)) * 100}%`, // 𝜑 (golden ratio)
      maxWidth: '100%',
    },
    bigPhotoCaption: {
      textAlign: 'center',
    },
  })
);

const About = () => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.container} id="about">
      <Container>
        <Typography variant="h3" className={classes.title}>
          About me
        </Typography>
        <Box className={classes.twoRows}>
          <Box className={classes.textSection}>
            <Box textAlign="justify">
              <Typography className={classes.paragraph}>
                I am a self-taught programmer from Tallinn, Estonia.
              </Typography>
              <Typography className={classes.paragraph}>
                I have been a developer for over 2 years. Professionally, I
                mainly focus on creating{' '}
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
                programming I found that I could pursue all of those passions at
                the same time. As a great bonus, I could also help people. I
                hope we can work together! {';)'}
              </Typography>
            </Box>
            <Link href={resumePDF} target="_blank">
              <Button
                variant="contained"
                style={{ marginBottom: '2em' }}
                id="cv"
              >
                View CV
              </Button>
            </Link>
          </Box>

          <Box className="col-6 col-12-medium imp-medium">
            <Card elevation={3} className={classes.bigPhotoContainer}>
              <CardMedia
                image={photos.working}
                title="Laptop photo"
                className={classes.bigPhoto}
              />
              <CardContent>
                <Typography
                  color="textSecondary"
                  className={classes.bigPhotoCaption}
                >
                  I do computer stuff 🤷‍♂️
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
