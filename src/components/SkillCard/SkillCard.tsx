import { Card, CardContent, CardHeader } from '@mui/material';
import { SkillCardProps, SkillItem } from '@typescript/@types/skills';
import { GatsbyImage } from 'gatsby-plugin-image';
import { isEmpty, map } from 'lodash';
import React, { memo } from 'react';

import LinkOrFragment from '../LinkOrFragment/LinkOrFragment';
import useStyles from './SkillCard.style';

const SubSkills = (props: { subSkills?: SkillItem[] }) => {
  const { subSkills } = props;
  const { classes } = useStyles();

  const hasSkills = !isEmpty(subSkills);

  if (!hasSkills) {
    return null;
  }

  return (
    <ul className={classes.list}>
      {map(subSkills, (subSkill) => {
        const { name } = subSkill;
        return <Skill {...subSkill} key={name} />;
      })}
    </ul>
  );
};

const Extra = (props: { extra: SkillItem['extra'] }) => {
  const { extra } = props;

  const { classes } = useStyles();

  if (!extra) {
    return null;
  }

  return <span className={classes.subtitle}>({extra})</span>;
};

const Logo = (props: { name: SkillItem['name']; src: SkillItem['src'] }) => {
  const { name, src } = props;
  const { classes } = useStyles();

  if (!src) {
    return null;
  }

  return (
    <GatsbyImage
      alt={name}
      image={src.childImageSharp?.gatsbyImageData}
      className={classes.miniImgContainer}
    />
  );
};

const Skill = (props: SkillItem) => {
  const { name, href, src, extra, subSkills } = props;

  return (
    <li>
      <LinkOrFragment href={href}>{name}</LinkOrFragment>{' '}
      <Logo name={name} src={src} /> <Extra extra={extra} />
      <SubSkills subSkills={subSkills} />
    </li>
  );
};

const SkillCard = memo(function SkillCard(props: SkillCardProps) {
  const { skillItems, title } = props;
  const { classes } = useStyles();

  return (
    <Card elevation={3} className={classes.cardContainer}>
      <CardHeader
        className={classes.cardHeader}
        title={title}
        titleTypographyProps={{
          className: classes.cardTitle,
          variant: 'body1',
        }}
      />
      <CardContent className={classes.cardContent}>
        <ul className={classes.list}>
          {map(skillItems, (skill) => {
            const { name } = skill;
            return <Skill {...skill} key={name} />;
          })}
        </ul>
      </CardContent>
    </Card>
  );
});

export default SkillCard;
