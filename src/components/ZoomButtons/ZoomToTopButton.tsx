import { KeyboardArrowUp as UpIcon } from '@mui/icons-material';
import { Fab, Zoom } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@theme/themes';
import { hasWindow } from '@utils/ssr';
import React from 'react';

const useStyles = makeStyles()((theme: Theme) => ({
  zoomButtonLabel: {
    color: theme.palette.text.primary,
  },
}));

const handleClickToScroll = () => {
  if (!hasWindow) {
    return;
  }

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

interface Props {
  trigger: boolean;
}

const ZoomToTopButton = (props: Props) => {
  const { trigger } = props;

  const { classes } = useStyles();

  return (
    <Zoom in={trigger}>
      <Fab
        onClick={handleClickToScroll}
        color="secondary"
        size="large"
        className={classes.zoomButtonLabel}
      >
        <UpIcon />
      </Fab>
    </Zoom>
  );
};

export default ZoomToTopButton;
