import { ExperienceItem } from '@components';
import { Box, Container, Typography } from '@mui/material';
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

  const workItems: ExperienceItemProps[] = data.allWorkJson.nodes;

  const lang = i18n.language;
  const isEnglish = lang.substring(0, 2) === 'en';

  return (
    <Box component="section" id="work" className={classes.container}>
      <Container>
        <Typography variant="h3" className={classes.title}>
          {t('Work.Work')}
          {isEnglish ? '' : '*'}
        </Typography>
        <Box className={classes.itemsOuterContainer}>
          <Box className={classes.line} />
          <Box className={classes.itemsContainer}>
            {map(workItems, (job, i) => {
              return <ExperienceItem {...job} key={`job ${i}`} />;
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Work;
