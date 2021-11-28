import { makeStyles } from '@theme/themes';
import React, { ImgHTMLAttributes } from 'react';

const useStyles = makeStyles()(() => ({
  mini: {
    height: '1em',
    verticalAlign: 'text-top',
  },
}));

const LineHighImage = (imgProps: ImgHTMLAttributes<{}>) => {
  const { classes } = useStyles();

  if (!imgProps.src) {
    return null;
  }

  return <img className={classes.mini} {...imgProps} />;
};

export default LineHighImage;
