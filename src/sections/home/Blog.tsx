import React from 'react';
import { JackInTheBox } from 'react-awesome-reveal';
import { Box, Container, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      background: `linear-gradient(to right bottom, ${theme.palette.primary.dark} 35%, ${theme.palette.secondary.dark} 100%)`,
      padding: '75px 0',
      borderRadius: '400% 100% / 30%',
      overflow: 'hidden',

      [theme.breakpoints.up('lg')]: {
        padding: '105px 20px 100px',
        borderRadius: '400% 120% / 1000%;',
      },

      [theme.breakpoints.down('sm')]: {
        padding: '50px 0',
        borderRadius: '400% 200% / 10%',
      },
    },
    title: {
      marginBottom: '0.5em',
    },
    innerContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    comingSoonText: {
      fontFamily: 'Marck Script',
      width: 'min-content',
      textAlign: 'center',
    },
  })
);

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
