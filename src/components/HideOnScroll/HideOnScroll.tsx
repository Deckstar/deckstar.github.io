import { Slide, useScrollTrigger } from '@mui/material';
import { isTouchDevice } from '@utils/ssr';
import React, { useMemo } from 'react';

interface Props {
  children: React.ReactElement;
}

const HideOnScroll = (props: Props) => {
  const { children } = props;
  const trigger = useScrollTrigger();

  const shouldBeVisible = useMemo(() => (isTouchDevice ? true : !trigger), [
    trigger,
  ]);

  return (
    <Slide appear={false} direction="down" in={shouldBeVisible}>
      {children}
    </Slide>
  );
};

export default HideOnScroll;
