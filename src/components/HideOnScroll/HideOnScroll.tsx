import React from 'react';
import { Slide, useScrollTrigger } from '@material-ui/core';
import { UseScrollTriggerOptions } from '@material-ui/core/useScrollTrigger/useScrollTrigger';

interface Props {
  window?: UseScrollTriggerOptions['target'];
  children: React.ReactElement;
}

const HideOnScroll = (props: Props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default HideOnScroll;
