import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { ImgHTMLAttributes } from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    mini: {
      height: '1em',
      verticalAlign: 'text-top',
    },
  })
);

const LineHighImage = (imgProps: ImgHTMLAttributes<{}>) => {
  const classes = useStyles();

  if (!imgProps.src) {
    return null;
  }

  return <img className={classes.mini} {...imgProps} />;
};

export default LineHighImage;
