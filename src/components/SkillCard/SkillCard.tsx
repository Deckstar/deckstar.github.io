import React, { memo } from 'react';
import { Box, Card, CardContent, CardHeader } from '@material-ui/core';
import { map, size } from 'lodash';
import { LineHighImage } from '@components';
import { SkillCardProps, SkillItem } from '@typescript/@types/skills';
import useStyles from './SkillCard.style';
import GatsbyImage from 'gatsby-image';

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

  if (extra) {
    const classes = useStyles();
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
    return (
      <GatsbyImage
        {...src.childImageSharp}
        imgStyle={{
          verticalAlign: 'text-top',
          width: undefined,
          maxHeight: '1em',
        }}
        placeholderStyle={{
          verticalAlign: 'text-top',
          width: undefined,
          maxHeight: '1em',
        }}
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

const SkillCard = memo((props: SkillCardProps) => {
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
