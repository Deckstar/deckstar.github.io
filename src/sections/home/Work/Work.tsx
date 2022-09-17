import { ExperienceItem } from '@components';
import { Container, Typography } from '@mui/material';
import { ExperienceItemProps } from '@typescript/@types/experience';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { map } from 'lodash';
import React from 'react';

import useStyles from './Work.style';

const Work = () => {
  const { classes } = useStyles();
  const { t, i18n } = useTranslation();

  const data = useStaticQuery(graphql`
    {
      allWorkJson {
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
          href
          logo {
            name
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, height: 40)
            }
          }
          dates {
            start
            end
          }
          description
        }
      }
    }
  `);

  const workItems: ExperienceItemProps[] = data.allWorkJson.nodes;

  const lang = i18n.language;
  const isEnglish = lang.substring(0, 2) === 'en';

  return (
    <section id="work" className={classes.container}>
      <Container>
        <Typography variant="h3" className={classes.title}>
          {t('Work.Work')}
          {isEnglish ? '' : '*'}
        </Typography>
        <div className={classes.itemsOuterContainer}>
          <div className={classes.line} />
          <div className={classes.itemsContainer}>
            {map(workItems, (job) => {
              const { name } = job || {};
              return <ExperienceItem {...job} key={name} />;
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Work;
