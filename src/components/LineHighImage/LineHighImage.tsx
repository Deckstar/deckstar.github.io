import React, { ImgHTMLAttributes } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mini: {
      height: '1em',
      verticalAlign: 'text-top',
    },
  })
);

const LineHighImage = (imgProps: ImgHTMLAttributes<{}>) => {
  const classes = useStyles();

  return <img className={classes.mini} {...imgProps} />;
};

export default LineHighImage;
