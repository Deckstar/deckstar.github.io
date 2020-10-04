import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@material-ui/core';
import { education, flags } from '@images';
import { LineHighImage } from '@components';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: 30,
    },
    title: {
      marginBottom: '0.5em',
    },
    textSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1em',
    },
    paragraph: {
      marginBottom: '1em',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      columnGap: '2em',
      rowGap: '1em',
    },
    cardContainer: {},
    cardContent: {
      height: '100%',
      alignItems: 'center',
    },
    cardPhoto: {
      height: 0,
      // paddingTop: '56.25%', // 16:9
      paddingTop: `${(1 / 2 ** (1 / 2)) * 100}%`, // 𝜑 (golden ratio)
      maxWidth: '100%',
    },
    cardCaption: {
      textAlign: 'center',
    },
  })
);

const Education = () => {
  const classes = useStyles();
  return (
    <Box component="section" id="education" className="main style1 special">
      <Container>
        <Typography variant="h3" className={classes.title}>
          Education
        </Typography>
        <Typography className={classes.paragraph}>
          I am a completely self-taught programmer — I learned by watching
          YouTube, reading books and doing online courses. Still, I valued my
          formal education very much. It was very international, so I've been in
          a cosmopolitan environment for nearly all my life. Because of this, I
          could learn how to speak several languages and interact with people
          from all kinds of cultures.
        </Typography>
        <Box className={classes.grid}>
          <Card elevation={3} className={classes.cardContainer}>
            <CardMedia
              image={education.SSE}
              title="Stockholm School of Economics"
              className={classes.cardPhoto}
            />
            <CardContent className={classes.cardContent}>
              <Typography className={classes.cardCaption}>
                Stockholm School of Economics{' '}
                <LineHighImage src={flags.Sweden} alt="Sweden flag" />
              </Typography>
              <Typography variant="body2" className={classes.cardCaption}>
                MSc Master of Finance (2017-2019)
              </Typography>
            </CardContent>
          </Card>

          <Card elevation={3} className={classes.cardContainer}>
            <CardMedia
              image={education.UCL}
              title="University College London"
              className={classes.cardPhoto}
            />
            <CardContent className={classes.cardContent}>
              <Typography className={classes.cardCaption}>
                University College London{' '}
                <LineHighImage src={flags.UK} alt="UK flag" />
              </Typography>
              <Typography variant="body2" className={classes.cardCaption}>
                BA Economics and Business with East European Studies (2014-2017)
              </Typography>
            </CardContent>
          </Card>

          <Card elevation={3} className={classes.cardContainer}>
            <CardMedia
              image={education.leRosey}
              title="Institut Le Rosey, Switzerland"
              className={classes.cardPhoto}
            />
            <CardContent className={classes.cardContent}>
              <Typography className={classes.cardCaption}>
                Institut Le Rosey, Switzerland{' '}
                <LineHighImage src={flags.Switzerland} alt="Switzerland flag" />
              </Typography>
              <Typography variant="body2" className={classes.cardCaption}>
                IB International Baccalaureate bilingual diploma (2008-2014)
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default Education;
