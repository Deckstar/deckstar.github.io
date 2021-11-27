import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';

import ZoomToTopButton from './ZoomToTopButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    zoomButtons: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  })
);

const ZoomButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.zoomButtons}>
      <ZoomToTopButton />
    </div>
  );
};

export default ZoomButtons;
