import { DateRange, LocationOn } from '@mui/icons-material';
import { Tooltip, Typography } from '@mui/material';
import { ExperienceItemProps } from '@typescript/@types/experience';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

import useStyles from './ExperienceItem.style';

const ExperienceItem = (props: ExperienceItemProps) => {
  const { classes } = useStyles();

  const {
    location,
    locationFlag,
    title,
    logo,
    name,
    dates,
    description,
  } = props;

  return (
    <div className={classes.itemContainer}>
      <div className={classes.itemBulletContainer}>
        <Tooltip arrow title={location} enterTouchDelay={0}>
          <span>
            <GatsbyImage
              image={locationFlag?.childImageSharp?.gatsbyImageData}
              alt={locationFlag?.name}
              className={classes.itemBullet}
            />
          </span>
        </Tooltip>
      </div>
      <div className={classes.itemContent}>
        <GatsbyImage
          image={logo?.childImageSharp?.gatsbyImageData}
          alt={name}
          className={classes.logo}
        />
        <div className={classes.rows}>
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography>
          <div className={classes.row}>
            <LocationOn />
            <Typography className={classes.location}>{location}</Typography>
          </div>
          <div className={classes.row}>
            <DateRange />
            <Typography>{dates}</Typography>
          </div>
        </div>
        <Typography className={classes.description}>{description}</Typography>
      </div>
    </div>
  );
};

export default ExperienceItem;
