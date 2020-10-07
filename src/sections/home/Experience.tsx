import React from 'react';
import { Box, Container } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Education, Work } from '.';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',

      [theme.breakpoints.down('xs')]: {
        gridTemplateColumns: '1fr',
      },
    },
  })
);
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
