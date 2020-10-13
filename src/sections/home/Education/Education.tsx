import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Typography } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import { map } from 'lodash';
import { ExperienceItem } from '@components';
import { ExperienceItemProps } from '@typescript/@types/experience';
import useStyles from './Education.style';

const Education = () => {
  const classes = useStyles();
  const { t } = useTranslation();

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

  return (
    <Box component="section" id="education" className={classes.container}>
      <Container>
        <Typography variant="h3" className={classes.title}>
          {t('Education.Education')}
        </Typography>
        <Box>
          <Typography className={classes.paragraph}>
            I am a completely self-taught programmer — I learned by watching
            YouTube, reading books and doing online courses. Still, I valued my
            formal education very much. It was very international, so I've been
            in a cosmopolitan environment for nearly all my life. Because of
            this, I could learn how to speak several languages and interact with
            people from all kinds of cultures.
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
