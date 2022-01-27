import { SkillCard } from '@components';
import { DesktopWindows, PhoneIphone } from '@mui/icons-material';
import { Container, Typography } from '@mui/material';
import { SkillCardProps } from '@typescript/@types/skills';
import clsx from 'clsx';
import { graphql, useStaticQuery } from 'gatsby';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { Masonry, RenderComponentProps } from 'masonic';
import React from 'react';

import { useSectionRefs } from '../Context';
import useStyles from './Skills.style';

const MasonryCard = (props: RenderComponentProps<SkillCardProps>) => {
  const { data } = props;

  return <SkillCard {...data} />;
};

const Skills = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();
  const { skills } = useSectionRefs();

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
                gatsbyImageData(layout: CONSTRAINED, height: 16)
              }
            }
            subSkills {
              extra
              name
              src {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, height: 16)
                }
              }
              subSkills {
                name
                src {
                  childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED, height: 16)
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
    <section ref={skills} id="skills" className={classes.container}>
      <Container>
        <Typography variant="h3" className={classes.title}>
          {t('Skills.Skills')}
        </Typography>
        <div className={classes.twoRows}>
          <div className={classes.bigIconsContainer}>
            <div className={classes.bigIconListItem}>
              <span className={classes.bigIconOutline}>
                <DesktopWindows color="secondary" className={classes.bigIcon} />
              </span>
            </div>
            <div className={classes.bigIconListItem}>
              <span className={classes.bigIconOutline}>
                <PhoneIphone color="primary" className={classes.bigIcon} />
              </span>
            </div>
          </div>

          <div className={clsx(classes.textSection, classes.textJustify)}>
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
          </div>
        </div>

        <div className={classes.skillsGrid}>
          <Masonry
            items={skillCategories}
            render={MasonryCard}
            columnGutter={20}
          />
        </div>
      </Container>
    </section>
  );
};

export default Skills;
