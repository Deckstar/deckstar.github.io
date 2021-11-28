import { KeyboardArrowUp as UpIcon } from '@mui/icons-material';
import { Box, Fab, useScrollTrigger, Zoom } from '@mui/material';
import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
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
          className={classes.zoomButtonLabel}
        >
          <UpIcon />
        </Fab>
      </Box>
    </Zoom>
  );
};

export default ZoomToTopButton;