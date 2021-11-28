import { ExperienceItem } from '@components';
import { Box, Container, Typography } from '@mui/material';
import { ExperienceItemProps } from '@typescript/@types/experience';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { map } from 'lodash';
import React from 'react';

import useStyles from './Education.style';

const Education = () => {
  const { classes } = useStyles();
  const { t, i18n } = useTranslation();

  const data = useStaticQuery(graphql`
    {
      allEducationJson {
        nodes {
          location
          locationFlag {
            childImageSharp {
              fixed(width: 24, height: 24) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          title
          logo {
            childImageSharp {
              fluid(maxHeight: 40) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          dates
          description
        }
      }
    }
  `);

  const schoolItems: ExperienceItemProps[] = data.allEducationJson.nodes;

  const lang = i18n.language;
  const isEnglish = lang.substring(0, 2) === 'en';

  return (
    <Box component="section" id="education" className={classes.container}>
      <Container>
        <Typography variant="h3" className={classes.title}>
          {t('Education.Education')}
          {isEnglish ? '' : '*'}
        </Typography>
        <Box>
          <Typography className={classes.paragraph}>
            {t('Education.Description')}
          </Typography>
        </Box>

        <Box className={classes.itemsOuterContainer}>
          <Box className={classes.line} />
          <Box className={classes.itemsContainer}>
            {map(schoolItems, (school, i) => {
              return <ExperienceItem {...school} key={`school ${i}`} />;
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Education;
