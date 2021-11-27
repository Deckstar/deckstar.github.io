import { Box, Card, CardContent, CardHeader } from '@mui/material';
import { SkillCardProps, SkillItem } from '@typescript/@types/skills';
import GatsbyImage from 'gatsby-image';
import { map, size } from 'lodash';
import React, { memo } from 'react';

import useStyles from './SkillCard.style';

const SubSkills = (props: { subSkills?: SkillItem[] }) => {
  const { subSkills } = props;
  const classes = useStyles();

  if (size(subSkills) > 0) {
    return (
      <Box component="ul" className={classes.list}>
        {map(subSkills, (subSkill) => {
          const { name } = subSkill;
          return <Skill {...subSkill} key={`subSkill ${name}`} />;
        })}
      </Box>
    );
  }

  return null;
};

const Extra = (props: { extra: SkillItem['extra'] }) => {
  const { extra } = props;

  const classes = useStyles();

  if (extra) {
    return (
      <Box component="span" className={classes.subtitle}>
        ({extra})
      </Box>
    );
  }

  return null;
};

const Logo = (props: { src: SkillItem['src'] }) => {
  const { src } = props;
  const classes = useStyles();

  if (src) {
    const widthPx: number = src?.childImageSharp.fluid.presentationWidth;
    const heightPx: number = src?.childImageSharp.fluid.presentationHeight;

    return (
      <GatsbyImage
        {...src.childImageSharp}
        style={{ width: widthPx + 0.5, height: heightPx }}
        className={classes.miniImgContainer}
      />
    );
  }

  return null;
};

const Skill = (props: SkillItem) => {
  const { name, src, extra, subSkills } = props;

  return (
    <Box component="li">
      {name} <Logo src={src} /> <Extra extra={extra} />
      <SubSkills subSkills={subSkills} />
    </Box>
  );
};

const SkillCard = memo(function SkillCard(props: SkillCardProps) {
  const { skillItems, title } = props;
  const classes = useStyles();

  return (
    <Card elevation={3} className={classes.cardContainer}>
      <CardHeader
        className={classes.cardHeader}
        title={`${title}:`}
        titleTypographyProps={{
          className: classes.cardTitle,
          variant: 'body1',
        }}
      />
      <CardContent className={classes.cardContent}>
        <Box component="ul" className={classes.list}>
          {map(skillItems, (skill) => {
            const { name } = skill;
            return <Skill {...skill} key={`skill ${name}`} />;
          })}
        </Box>
      </CardContent>
    </Card>
  );
});

export default SkillCard;
