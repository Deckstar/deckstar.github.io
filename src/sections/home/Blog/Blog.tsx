import React from 'react';
import { JackInTheBox } from 'react-awesome-reveal';
import { Box, Container, Typography } from '@material-ui/core';
import useStyles from './Blog.styles';

const Blog = () => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.container} id="blog">
      <Container>
        <Typography variant="h3" className={classes.title}>
          Blog
        </Typography>
        <JackInTheBox triggerOnce>
          <Box className={classes.innerContainer}>
            <Typography variant="h4" className={classes.comingSoonText}>
              Coming soon!
            </Typography>
          </Box>
        </JackInTheBox>
      </Container>
    </Box>
  );
};

export default Blog;
