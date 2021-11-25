import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Box, Container, Typography } from '@material-ui/core';
import useStyles from './Banner.style';

const Banner = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Box component="section" id="banner">
      <Box className={classes.background}>
        <Container className={classes.inner}>
          <Box className={classes.textContainer}>
            <Typography variant="h3" className={classes.heading} paragraph>
              Thanks a lot to all these fine people for all their great work!
            </Typography>
            <Typography>
              This portfolio page wouldn't have been possible without the work
              of all of these wonderful creators. So I've devoted this page to
              thanking them and providing links for more information.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Banner;
