import React from 'react';
import { Box, Container } from '@material-ui/core';
import { Education, Work } from '..';
import useStyles from './Experience.style';

const Experience = () => {
  const classes = useStyles();

  return (
    <Box component="section" id="experience">
      <Container className={classes.container}>
        <Work />
        <Education />
      </Container>
    </Box>
  );
};

export default Experience;
