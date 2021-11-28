import { Theme } from '@mui/material/styles';
import { makeStyles } from '@theme/themes';
import React from 'react';

import ZoomToTopButton from './ZoomToTopButton';

const useStyles = makeStyles()((theme: Theme) => ({
  zoomButtons: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const ZoomButtons = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.zoomButtons}>
      <ZoomToTopButton />
    </div>
  );
};

export default ZoomButtons;
