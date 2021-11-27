import { Slide, useScrollTrigger } from '@mui/material';
import React from 'react';

interface Props {
  children: React.ReactElement;
}

const HideOnScroll = (props: Props) => {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default HideOnScroll;
