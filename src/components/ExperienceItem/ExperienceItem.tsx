import { Box, Tooltip, Typography } from '@material-ui/core';
import { ExperienceItemProps } from '@typescript/@types/experience';
import GatsbyImage from 'gatsby-image';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

import useStyles from './ExperienceItem.style';

const ExperienceItem = (props: ExperienceItemProps) => {
  const classes = useStyles();

  const { location, locationFlag, title, logo, dates, description } = props;

  return (
    <Fade triggerOnce direction="up">
      <Box className={classes.itemContainer}>
        <Box className={classes.itemBulletContainer}>
          <Tooltip arrow title={location} enterTouchDelay={0}>
            <Box component="span">
              <GatsbyImage
                {...locationFlag.childImageSharp}
                className={classes.itemBullet}
              />
            </Box>
          </Tooltip>
        </Box>
        <Box className={classes.itemContent}>
          <GatsbyImage
            {...logo.childImageSharp}
            imgStyle={{ width: null }}
            className={classes.firmLogo}
          />
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography>
          <Typography className={classes.dates}>{dates}</Typography>
          <Typography className={classes.description}>{description}</Typography>
        </Box>
      </Box>
    </Fade>
  );
};

export default ExperienceItem;
