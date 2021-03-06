import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Typography } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import { map } from 'lodash';
import { ExperienceItem } from '@components';
import { ExperienceItemProps } from '@typescript/@types/experience';
import useStyles from './Work.style';

const Work = () => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  const data = useStaticQuery(graphql`
    {
      allWorkJson {
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
