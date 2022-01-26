import socialLinks from '@data/socialLinks';
import { Button, Container, Link, Typography } from '@mui/material';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { map } from 'lodash';
import React from 'react';

import useStyles from './Contact.style';

const Contact = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();
  return (
    <section id="contact" className={classes.container}>
      <Container>
        <Typography variant="h3" className={classes.title}>
          {t('Contact.Contact')}
        </Typography>
        <div className={classes.contentContainer}>
          <Typography>{t('Contact.GetInTouch')}:</Typography>
          <div className={classes.icons}>
            {map(socialLinks, (site, i) => {
              const { url, Icon } = site;
              return (
                <Link key={`contact ${i}`} href={url} className={classes.icon}>
                  <Icon size={26} />
                </Link>
              );
            })}
          </div>
          <Typography paragraph>{t('Contact.SendEmail')}:</Typography>
          <Link href="mailto:dexter.sibirtsev@gmail.com">
            <Button color="grey" variant="contained">
              dexter.sibirtsev@gmail.com
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
