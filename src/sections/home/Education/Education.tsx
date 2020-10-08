import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { map } from 'lodash';
import { companies, flags } from '@images';
import { ExperienceItem } from '@components';
import { ExperienceItemProps } from '@typescript/@types/experience';
import useStyles from './Education.styles';

const schoolItems: ExperienceItemProps[] = [
  {
    location: 'Stockholm, Sweden',
    locationFlag: flags.Sweden,
    title: 'Stockholm School of Economics',
    logo: companies.sseLogoWhite,
    dates: 'September 2017 – May 2019',
    description: 'MSc Master of Finance',
  },
  {
    location: 'London, United Kingdom',
    locationFlag: flags.UK,
    title: 'University College London',
    logo: companies.ucl,
    dates: 'September 2014 – May 2017',
    description: 'BA Economics and Business with East European Studies',
  },
  {
    location: 'Rolle, Switzerland',
    locationFlag: flags.Switzerland,
    title: 'Institut Le Rosey',
    logo: companies.leRoseyLight,
    dates: 'September 2008 – June 2014',
    description: 'IB International Baccalaureate bilingual diploma',
  },
];

const Education = () => {
  const classes = useStyles();

  return (
    <Box component="section" id="education" className={classes.container}>
      <Container>
        <Typography variant="h3" className={classes.title}>
          Education
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
              return <ExperienceItem {...school} key={`school i`} />;
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Education;
