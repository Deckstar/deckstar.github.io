import { Box, CircularProgress } from '@material-ui/core';
import React from 'react';

const LoadingScreen = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100%"
    >
      <CircularProgress
        disableShrink // reduce CPU load
        size={80}
      />
    </Box>
  );
};

export default LoadingScreen;
