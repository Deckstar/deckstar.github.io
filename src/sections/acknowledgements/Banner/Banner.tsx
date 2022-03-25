// @ts-ignore
import overlay3 from '@images/overlays/overlay3.svg';
import { Container, Typography } from '@mui/material';
import React from 'react';

import useStyles from './Banner.style';

const Banner = () => {
  const { classes } = useStyles();

  return (
    <section className={classes.section} id="banner">
      <img src={overlay3} className={classes.background} alt="" />

      <Container className={classes.inner}>
        <div className={classes.textContainer}>
          <Typography variant="h3" className={classes.heading} paragraph>
            Thanks a lot to all these fine people for all their great work!
          </Typography>
          <Typography>
            This portfolio page wouldn't have been possible without the work of
            all of these wonderful creators. So I've devoted this page to
            thanking them and providing links for more information.
          </Typography>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
