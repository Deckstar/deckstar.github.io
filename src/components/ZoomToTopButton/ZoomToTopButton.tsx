import { Box, Fab, useScrollTrigger, Zoom } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  // ModeComment as ChatIcon,
  KeyboardArrowUp as UpIcon,
} from '@material-ui/icons';
import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    zoomButtons: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    zoomButton: {
      marginTop: theme.spacing(1),
    },
    zoomButtonLabel: {
      color: theme.palette.text.primary,
    },
  })
);

const handleClickToScroll = () => {
  scroll.scrollToTop({
    smooth: true,
  });
};

const ZoomToTopButton = () => {
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Box className={classes.zoomButtons}>
      <Zoom in={trigger}>
        <Box
          onClick={handleClickToScroll}
          role="presentation"
          className={classes.zoomButton}
        >
          <Fab
            color="secondary"
            size="small"
            aria-label="scroll back to top"
            classes={{ label: classes.zoomButtonLabel }}
          >
            <UpIcon />
          </Fab>
        </Box>
      </Zoom>
      {/* <Box role="presentation" className={classes.zoomButton}>
        <Fab
          color="primary"
          size="small"
          aria-label="open chat"
          classes={{ label: classes.zoomButtonLabel }}
        >
          <ChatIcon />
        </Fab>
      </Box> */}
    </Box>
  );
};

export default ZoomToTopButton;
