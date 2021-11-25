import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Box, Container, Typography } from '@material-ui/core';
import { Education, Work } from '..';
import useStyles from './Experience.style';

const TranslationDisclaimer = (props: { hide: boolean }) => {
  const classes = useStyles();
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
  const classes = useStyles();
  const { i18n } = useTranslation();

  const lang = i18n.language;
  const isEnglish = lang.substring(0, 2) === 'en';

  return (
    <Box component="section" id="experience">
      <Container className={classes.container}>
        <Box className={classes.workAndEducation}>
          <Work />
          <Education />
        </Box>
        <TranslationDisclaimer hide={isEnglish} />
      </Container>
    </Box>
  );
};

export default Experience;
