import { useScrollTrigger } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@theme/themes';
import React from 'react';

import QuickScrollButton from './QuickScrollButton';
import ZoomToTopButton from './ZoomToTopButton';

const useStyles = makeStyles()((theme: Theme) => ({
  zoomButtons: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    display: 'flex',
    alignItems: 'flex-end',
    gap: theme.spacing(1.5),
  },
}));

const ZoomButtons = () => {
  const { classes } = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <div className={classes.zoomButtons}>
      <ZoomToTopButton trigger={trigger} />
      <QuickScrollButton trigger={trigger} />
    </div>
  );
};

export default ZoomButtons;
