import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { map } from 'lodash';
import { companies, flags } from '@images';
import { ExperienceItem } from '@components';
import { ExperienceItemProps } from '@typescript/@types/experience';
import useStyles from './Work.styles';

const workItems: ExperienceItemProps[] = [
  {
    location: 'Tallinn, Estonia',
    locationFlag: flags.Estonia,
    title: 'Full stack software developer',
    logo: companies.singleton,
    dates: 'February 2020 – ongoing',
    description:
      'Worked full-time on developing software for web and mobile. Development projects included: iOS & Android applications; websites (using React); WordPress plugins; a newspaper content-management system (CMS) page.',
  },
  {
    location: 'Budapest, Hungary',
    locationFlag: flags.Hungary,
    title: 'Lead developer and content creator',
    logo: companies.chromoNotes,
    dates: 'July – December 2019',
    description:
      'Wrote the main codebase (a MuseScore plugin) to transform over 50 pieces of piano sheet music into SVG-quality electronic versions, in which each note was automatically color-coded. Created a series of 3 books. Self-published the books on Amazon.',
  },
  {
    location: 'Moscow, Russia',
    locationFlag: flags.Russia,
    title: 'Assistant accountant and content manager',
    logo: companies.buyonRU,
    dates: 'July – August 2016; July – September 2017',
    description:
      'Edited website content to high standards. Assisted in filing company accounts. Attended regular business negotiations with the start-up’s CEO and attended new employee interviews. Performed various office administration duties (e.g. overview contracts, translate letters).',
  },
  {
    location: 'Tallinn, Estonia',
    locationFlag: flags.Estonia,
    title: 'Digital customer relations intern',
    logo: companies.swedbank,
    dates: 'June 2016',
    description:
      'Helped gather field survey data for and promote the company’s mobile app. Personally presented on the app’s benefits over internet banking to over 150 clients, and personally assisted many in transitioning. Work shadowed for client relations managers and financial holdings advisors.',
  },
];

const Work = () => {
  const classes = useStyles();

  return (
    <Box component="section" id="education" className={classes.container}>
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
