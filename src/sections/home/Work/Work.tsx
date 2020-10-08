import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import { map } from 'lodash';
import { companies, flags } from '@images';
import { ExperienceItem } from '@components';
import { ExperienceItemProps } from '@typescript/@types/experience';
import useStyles from './Work.styles';

const Work = () => {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    {
      allWorkJson {
        edges {
          node {
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
    }
  `);

  const workItems: ExperienceItemProps[] = data.allWorkJson.edges;

  return (
    <Box component="section" id="work" className={classes.container}>
      <Container>
        <Typography variant="h3" className={classes.title}>
          Work
        </Typography>
        <Box className={classes.itemsOuterContainer}>
          <Box className={classes.line} />
          <Box className={classes.itemsContainer}>
            {map(workItems, (job, i) => {
              return <ExperienceItem {...job} key={`job i`} />;
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Work;
