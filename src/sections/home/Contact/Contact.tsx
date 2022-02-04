import socialLinks from '@data/socialLinks';
import { Email } from '@mui/icons-material';
import { Button, Container, Link, Typography } from '@mui/material';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { map } from 'lodash';
import React from 'react';

import { useSectionRefs } from '../Context';
import useStyles from './Contact.style';

const Contact = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();
  const { contact } = useSectionRefs();

  return (
    <section ref={contact} id="contact" className={classes.container}>
      <Container>
        <Typography variant="h3" className={classes.title}>
          {t('Contact.Contact')}
        </Typography>
        <div className={classes.contentContainer}>
          <Typography>{t('Contact.GetInTouch')}:</Typography>
          <div className={classes.icons}>
            {map(socialLinks, (site) => {
              const { url, Icon, title } = site;
              return (
                <Link key={title} href={url} className={classes.icon}>
                  <Icon width={26} height={26} />
                </Link>
              );
            })}
          </div>
          <Typography paragraph>{t('Contact.SendEmail')}:</Typography>
          <Link href="mailto:dexter.sibirtsev@gmail.com">
            <Button color="grey" variant="contained" startIcon={<Email />}>
              dexter.sibirtsev@gmail.com
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
