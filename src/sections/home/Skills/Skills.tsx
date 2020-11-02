import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Box, Container, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { graphql, useStaticQuery } from 'gatsby';
import { FaDesktop, FaMobile } from 'react-icons/fa';
import { Masonry, RenderComponentProps } from 'masonic';
import { SkillCard } from '@components';
import { SkillCardProps } from '@typescript/@types/skills';
import useStyles from './Skills.style';

const MasonryCard = (props: RenderComponentProps<SkillCardProps>) => {
  const { data } = props;

  return <SkillCard {...data} />;
};

const Skills = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();

  const data = useStaticQuery(graphql`
    {
      allSkillsJson {
        nodes {
          title
          skillItems {
            extra
            name
            src {
              childImageSharp {
                fluid(maxHeight: 16) {
                  ...GatsbyImageSharpFluid
                  presentationWidth
                  presentationHeight
                }
              }
            }
            subSkills {
              name
              src {
                childImageSharp {
                  fluid(maxHeight: 16) {
                    ...GatsbyImageSharpFluid
                    presentationWidth
                    presentationHeight
                  }
                }
              }
              subSkills {
                name
                src {
                  childImageSharp {
                    fluid(maxHeight: 16) {
                      ...GatsbyImageSharpFluid
                      presentationWidth
                      presentationHeight
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const skillCategories = data.allSkillsJson.nodes;

  return (
    <Box component="section" className={classes.container} id="skills">
      <Container>
        <Typography variant="h3" className={classes.title}>
          {t('Skills.Skills')}
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
            <Trans i18nKey="Skills.Overview">
              <Typography>
                This is a list of my favorite tools that I've worked with. Most
                of these I use every week, many I use every day.
              </Typography>
              <Typography>
                I admit that this section might be overly detailed. I've just
                always loved looking at colorful collections.
              </Typography>
            </Trans>
          </Box>
        </Box>

        <Box className={classes.skillsGrid}>
          <Masonry
            items={skillCategories}
            render={MasonryCard}
            columnGutter={20}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
