import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, Container, Link, Typography } from '@material-ui/core';
import { map } from 'lodash';
import useStyles from './Contact.style';
import socialLinks from '@data/socialLinks';

const Contact = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <Box component="section" id="contact" className={classes.container}>
      <Container>
        <Typography variant="h3" className={classes.title}>
          {t('Contact.Contact')}
        </Typography>
        <Box className={classes.contentContainer}>
          <Typography>
            Let's get in touch! You can find me at any of these links:
          </Typography>
          <Box className={classes.icons}>
            {map(socialLinks, (site, i) => {
              const { url, Icon } = site;
              return (
                <Link key={`contact ${i}`} href={url} className={classes.icon}>
                  <Icon size={26} />
                </Link>
              );
            })}
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
