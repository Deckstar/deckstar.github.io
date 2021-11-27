import { Box, Fab, useScrollTrigger, Zoom } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { KeyboardArrowUp as UpIcon } from '@material-ui/icons';
import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  );
};

export default ZoomToTopButton;
