import { KeyboardArrowUp as UpIcon } from '@mui/icons-material';
import { Fab, useScrollTrigger, Zoom } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@theme/themes';
import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

const useStyles = makeStyles()((theme: Theme) => ({
  zoomButton: {
    marginTop: theme.spacing(1),
  },
  zoomButtonLabel: {
    color: theme.palette.text.primary,
  },
}));

const handleClickToScroll = () => {
  scroll.scrollToTop({
    smooth: true,
  });
};

const ZoomToTopButton = () => {
  const { classes } = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClickToScroll}
        role="presentation"
        className={classes.zoomButton}
      >
        <Fab
          color="secondary"
          size="small"
          aria-label="scroll back to top"
          className={classes.zoomButtonLabel}
        >
          <UpIcon />
        </Fab>
      </div>
    </Zoom>
  );
};

export default ZoomToTopButton;
