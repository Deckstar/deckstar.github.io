import React from 'react';
import { Box, Button, Container, Link, Typography } from '@material-ui/core';
import { FaGithub, FaGoodreads, FaTwitter } from 'react-icons/fa';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '30px 0',
    },
    title: {
      marginBottom: '0.5em',
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2em',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5em',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icons: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '2em',
    },
    icon: {
      color: theme.palette.grey[400],
      '&:hover': {
        color: theme.palette.grey[500],
      },
    },
    buttons: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '2em',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="section" id="contact" className={classes.container}>
      <Container>
        <Typography variant="h3" className={classes.title}>
          Contact
        </Typography>
        <Box className={classes.contentContainer}>
          <Typography>
            Let's get in touch! You can find me at any of these links:
          </Typography>
          <Box className={classes.icons}>
            <Link
              href="https://twitter.com/DexterSibirtsev"
              className={classes.icon}
            >
              <FaTwitter size={26} />
            </Link>
            <Link href="https://github.com/Deckstar" className={classes.icon}>
              <FaGithub size={26} />
            </Link>
            <Link
              href="https://www.goodreads.com/user/show/58196314-dexter"
              className={classes.icon}
            >
              <FaGoodreads size={26} />
            </Link>
          </Box>
          <Typography>Or, just send me an email!</Typography>
          <Link href="mailto:dexter.sibirtsev@gmail.com">
            <Button variant="contained">dexter.sibirtsev@gmail.com</Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
