import React from 'react';
import { FaGithub, FaGoodreads, FaTwitter } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { scroller } from 'react-scroll';
import { IconType } from 'react-icons';
import { Box, Button, Container, Link, Typography } from '@material-ui/core';
import { map } from 'lodash';
import { photos } from '@images';
import useStyles from './Banner.style';

const Banner = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Box component="section" id="banner">
      <Box className={classes.background}>
        <Container className={classes.inner}>
          <Box className={classes.textContainer}>
            <Typography variant="h3">
              Thanks a lot to all these fine people for their help!
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Banner;
