import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { FaDesktop, FaMobile } from 'react-icons/fa';
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from '@material-ui/core/styles';
import SkillCard from '@components/SkillCard/SkillCard';
import skillCategories from '@data/skills';
import { Masonry, RenderComponentProps } from 'masonic';
import { SkillCardProps } from '@typescript/@types/skills';
import { Fade } from 'react-awesome-reveal';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      background: `linear-gradient(to right bottom, ${theme.palette.primary.contrastText} 35%, ${theme.palette.secondary.contrastText} 100%)`,
      padding: '75px 0',
      borderRadius: '400% 100% / 20%',
      overflow: 'hidden',

      [theme.breakpoints.up('md')]: {
        padding: '105px 20px 100px',
        borderRadius: '50% / 5%',
      },

      [theme.breakpoints.down('sm')]: {
        padding: '50px 0',
        borderRadius: '400% 200% / 10%',
      },
    },
    title: {
      marginBottom: '0.5em',
    },
    twoRows: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: '1fr 1fr',
      },
      columnGap: '2em',
      rowGap: '1em',
    },
    skillCategory: {},
    bigIconsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      listStyle: 'none',
      paddingLeft: 0,
    },
    bigIconListItem: {
      display: 'inline-block',
      padding: '2.5em',
      textAlign: 'center',
    },
    bigIconOutline: {
      borderRadius: 10,
      border: `solid 1px ${theme.palette.text.primary}`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '8em',
      lineHeight: '8em',
      margin: 0,
      textAlign: 'center',
      width: '8em',
      transform: 'rotate(45deg)',
    },
    bigIcon: {
      transform: 'rotate(-45deg)',
      display: 'inline-block',
      lineHeight: 'inherit',
    },
    textSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1em',
    },
    skillsGrid: {
      margin: '1.5em 0',
      '& > div': {
        outline: 'none',
      },
    },
  })
);

const MasonryCard = (props: RenderComponentProps<SkillCardProps>) => {
  const { data } = props;

  return <SkillCard {...data} />;
};

const Skills = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box component="section" className={classes.container} id="skills">
      <Container>
        <Typography variant="h3" className={classes.title}>
          Skills
        </Typography>
        <Box className={classes.twoRows}>
          <Box className={classes.bigIconsContainer}>
            <Box className={classes.bigIconListItem}>
              <span className={classes.bigIconOutline}>
                <FaDesktop
                  color={theme.palette.secondary.main}
                  size="50%"
                  className={classes.bigIcon}
                />
              </span>
            </Box>
            <Box className={classes.bigIconListItem}>
              <span className={classes.bigIconOutline}>
                <FaMobile
                  color={theme.palette.primary.main}
                  size="50%"
                  className={classes.bigIcon}
                />
              </span>
            </Box>
          </Box>

          <Box className={classes.textSection} textAlign="justify">
            <Typography>
              This is a list of my favorite tools that I've worked with. Most of
              these I use every week, many I use every day.
            </Typography>
            <Typography>
              I admit that this section might be overly detailed. I've just
              always loved looking at colorful collections.
            </Typography>
          </Box>
        </Box>

        <Fade triggerOnce direction="up">
          <Box className={classes.skillsGrid}>
            <Masonry
              items={skillCategories}
              render={MasonryCard}
              columnGutter={20}
            />
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default Skills;
