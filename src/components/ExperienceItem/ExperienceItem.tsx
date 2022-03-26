import { DateRange, LocationOn, Schedule } from '@mui/icons-material';
import { Tooltip, Typography } from '@mui/material';
import { ExperienceItemProps } from '@typescript/@types/experience';
import { ArrayElement } from '@typescript/@types/utils';
import clsx from 'clsx';
import dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration';
import relativeTimePlugin from 'dayjs/plugin/relativeTime';
import { GatsbyImage } from 'gatsby-plugin-image';
import { compact, join, map, reduce, uniq } from 'lodash';
import React, { useMemo } from 'react';

import LinkOrFragment from '../LinkOrFragment/LinkOrFragment';
import useStyles from './ExperienceItem.style';

dayjs.extend(durationPlugin);
dayjs.extend(relativeTimePlugin);

type Dates = ExperienceItemProps['dates'];

const makeDuration = (duration: ArrayElement<Dates>) => {
  const { start, end } = duration;

  const startParsed = dayjs(start);
  const endParsed = dayjs(end || undefined);

  const startFormatted = startParsed.format('MMMM YYYY');
  const endFormatted = end ? endParsed.format('MMMM YYYY') : 'ongoing';

  const nonEmptyDates = compact([startFormatted, endFormatted]);
  const uniqueDates = uniq(nonEmptyDates);

  const label = join(uniqueDates, ' – ');

  const days = endParsed.diff(startParsed, 'days');

  return { days, label };
};

const makeDurations = (dates: Dates) => {
  const parsedDurations = map(dates, makeDuration);

  const durations = reduce(
    parsedDurations,
    (accumulator, value) => {
      const accumulatedLabels = accumulator.labels;
      const accumulatedDays = accumulator.totalDays;

      const { days, label } = value;

      const merged: typeof accumulator = {
        totalDays: accumulatedDays + days,
        labels: [...accumulatedLabels, label],
      };
      return merged;
    },
    { labels: [] as string[], totalDays: 0 }
  );

  const { labels, totalDays } = durations;

  const duration = (() => {
    try {
      return dayjs.duration({ days: totalDays }).humanize();
    } catch (error) {
      return `${totalDays} days`;
    }
  })();

  return { duration, labels };
};

const ExperienceItem = (props: ExperienceItemProps) => {
  const { classes } = useStyles();

  const {
    location,
    locationFlag,
    title,
    logo,
    name,
    href,
    dates,
    description,
  } = props;

  const { duration, labels } = useMemo(() => makeDurations(dates), [dates]);

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
        <LinkOrFragment href={href}>
          <GatsbyImage
            image={logo?.childImageSharp?.gatsbyImageData}
            alt={name}
            className={classes.logo}
          />
        </LinkOrFragment>

        <div className={classes.rows}>
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography>
          <div className={classes.row}>
            <LocationOn />
            <Typography className={classes.location}>{location}</Typography>
          </div>

          <div className={classes.durations}>
            <div className={classes.row}>
              <DateRange />

              <div>
                {map(labels, (label) => {
                  return <Typography>{label}</Typography>;
                })}
              </div>
            </div>

            <div className={clsx(classes.row, classes.durationRow)}>
              <Schedule />
              <Typography className={classes.duration}>{duration}</Typography>
            </div>
          </div>
        </div>

        <Typography className={classes.description}>{description}</Typography>
      </div>
    </div>
  );
};

export default ExperienceItem;
