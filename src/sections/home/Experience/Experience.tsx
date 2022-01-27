import { Container, Typography } from '@mui/material';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import { Education, Work } from '..';
import { useSectionRefs } from '../Context';
import useStyles from './Experience.style';

const TranslationDisclaimer = (props: { hide: boolean }) => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  const { hide } = props;
  if (hide) return null;

  return (
    <Typography className={classes.disclaimer}>
      *{t('Experience.TranslationsUnderConstruction')}
    </Typography>
  );
};

const Experience = () => {
  const { classes } = useStyles();
  const { i18n } = useTranslation();
  const { experience } = useSectionRefs();

  const lang = i18n.language;
  const isEnglish = lang.substring(0, 2) === 'en';

  return (
    <section ref={experience} id="experience">
      <Container className={classes.container}>
        <div className={classes.workAndEducation}>
          <Work />
          <Education />
        </div>
        <TranslationDisclaimer hide={isEnglish} />
      </Container>
    </section>
  );
};

export default Experience;
