import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Box, Container, Tooltip, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { companies, flags } from '@images';

const lineSize = 3;
const bulletSize = 24;
const imageHeight = 40;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '30px 0',
    },
    title: {
      marginBottom: '0.5em',
    },
    itemsOuterContainer: {
      display: 'flex',
    },
    // make sure you use px units (not em) for this css logic, otherwise it won't align
    line: {
      borderRadius: `${lineSize / 2}px`,
      borderRight: `${lineSize}px solid ${theme.palette.text.secondary}`,
      marginLeft: `${bulletSize - lineSize}px`,
    },
    itemsContainer: {
      marginLeft: `-${bulletSize / 2 + lineSize / 2}px`,
    },
    itemContainer: {
      display: 'flex',
      padding: '0.5px 0 1.5rem',
    },
    itemBulletContainer: {
      paddingTop: `calc(${imageHeight / 2}px - ${bulletSize / 2}px)`,
    },
    itemBullet: {
      width: `${bulletSize}px`,
      height: `${bulletSize}px`,
    },
    itemContent: {
      marginLeft: '2em',
    },
    // end px units
    firmLogo: {
      maxHeight: imageHeight,
      maxWidth: '100%',
    },
    jobTitle: {
      fontWeight: 'bold',
    },
    workDates: {
      marginBottom: '1em',
    },
    jobDescription: {},
  })
);

const Work = () => {
  const classes = useStyles();

  return (
    <Box component="section" id="education" className={classes.container}>
      <Container>
        <Typography variant="h3" className={classes.title}>
          Work
        </Typography>
        <Box className={classes.itemsOuterContainer}>
          <Box className={classes.line} />
          <Box className={classes.itemsContainer}>
            {/* item 1 */}
            <Fade triggerOnce direction="up">
              <Box className={classes.itemContainer}>
                <Box className={classes.itemBulletContainer}>
                  <Tooltip arrow title="Tallinn, Estonia" enterTouchDelay={0}>
                    <img src={flags.Estonia} className={classes.itemBullet} />
                  </Tooltip>
                </Box>
                <Box className={classes.itemContent}>
                  <img src={companies.singleton} className={classes.firmLogo} />
                  <Typography variant="h5" className={classes.jobTitle}>
                    Full stack software developer
                  </Typography>
                  <Typography className={classes.workDates}>
                    February 2020 – ongoing
                  </Typography>
                  <Typography className={classes.jobDescription}>
                    Worked full-time on developing software for web and mobile.
                    Development projects included: iOS & Android applications;
                    websites (using React); WordPress plugins; a newspaper
                    content-management system (CMS) page.
                  </Typography>
                </Box>
              </Box>
            </Fade>
            {/* item 2 */}
            <Fade triggerOnce direction="up">
              <Box className={classes.itemContainer}>
                <Box className={classes.itemBulletContainer}>
                  <Tooltip arrow title="Budapest, Hungary" enterTouchDelay={0}>
                    <img src={flags.Hungary} className={classes.itemBullet} />
                  </Tooltip>
                </Box>
                <Box className={classes.itemContent}>
                  <img
                    src={companies.chromoNotes}
                    className={classes.firmLogo}
                  />
                  <Typography variant="h5" className={classes.jobTitle}>
                    Lead developer and content creator
                  </Typography>
                  <Typography className={classes.workDates}>
                    July – December 2019
                  </Typography>
                  <Typography className={classes.jobDescription}>
                    Wrote the main codebase (a MuseScore plugin) to transform
                    over 50 pieces of piano sheet music into SVG-quality
                    electronic versions, in which each note was automatically
                    color-coded. Created a series of 3 books. Self-published the
                    books on Amazon.
                  </Typography>
                </Box>
              </Box>
            </Fade>
            {/* item 3 */}
            <Fade triggerOnce direction="up">
              <Box className={classes.itemContainer}>
                <Box className={classes.itemBulletContainer}>
                  <Tooltip arrow title="Moscow, Russia" enterTouchDelay={0}>
                    <img src={flags.Russia} className={classes.itemBullet} />
                  </Tooltip>
                </Box>
                <Box className={classes.itemContent}>
                  <img src={companies.buyonRU} className={classes.firmLogo} />
                  <Typography variant="h5" className={classes.jobTitle}>
                    Assistant accountant and content manager
                  </Typography>
                  <Typography className={classes.workDates}>
                    July – August 2016; July – September 2017
                  </Typography>
                  <Typography className={classes.jobDescription}>
                    Edited website content to high standards. Assisted in filing
                    company accounts. Attended regular business negotiations
                    with the start-up’s CEO and attended new employee
                    interviews. Performed various office administration duties
                    (e.g. overview contracts, translate letters).
                  </Typography>
                </Box>
              </Box>
            </Fade>
            {/* item 4 */}
            <Fade triggerOnce direction="up">
              <Box className={classes.itemContainer}>
                <Box className={classes.itemBulletContainer}>
                  <Tooltip arrow title="Tallinn, Estonia" enterTouchDelay={0}>
                    <img src={flags.Estonia} className={classes.itemBullet} />
                  </Tooltip>
                </Box>
                <Box className={classes.itemContent}>
                  <img src={companies.swedbank} className={classes.firmLogo} />
                  <Typography variant="h5" className={classes.jobTitle}>
                    Digital customer relations intern
                  </Typography>
                  <Typography className={classes.workDates}>
                    June 2016
                  </Typography>
                  <Typography className={classes.jobDescription}>
                    Helped gather field survey data for and promote the
                    company’s mobile app. Personally presented on the app’s
                    benefits over internet banking to over 150 clients, and
                    personally assisted many in transitioning. Work shadowed for
                    client relations managers and financial holdings advisors.
                  </Typography>
                </Box>
              </Box>
            </Fade>
            {/* end items */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Work;
