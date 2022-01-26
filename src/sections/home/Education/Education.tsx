import { ExperienceItem } from '@components';
import { Container, Typography } from '@mui/material';
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
            name
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 24, height: 24)
            }
          }
          title
          name
          logo {
            name
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, height: 40)
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
    <section id="education" className={classes.container}>
      <Container>
        <Typography variant="h3" className={classes.title}>
          {t('Education.Education')}
          {isEnglish ? '' : '*'}
        </Typography>
        <div>
          <Typography className={classes.paragraph}>
            {t('Education.Description')}
          </Typography>
        </div>

        <div className={classes.itemsOuterContainer}>
          <div className={classes.line} />
          <div className={classes.itemsContainer}>
            {map(schoolItems, (school, i) => {
              return <ExperienceItem {...school} key={`school ${i}`} />;
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Education;
