import '@assets/css/styles.scss';

import { Navbar, ZoomButtons } from '@components';
import { Box } from '@mui/material';
import { makeStyles } from '@theme/themes';
import React, { ReactNode } from 'react';

import Footer from './Subcomponents/Footer';

interface LayoutProps {
  children: ReactNode;
}

const useStyles = makeStyles()((theme) => ({
  main: {
    background: theme.palette.background.default,
  },
}));

const Layout = ({ children }: LayoutProps) => {
  const { classes } = useStyles();

  return (
    <>
      <Navbar />
      <Box component="main" className={classes.main}>
        {children}
      </Box>
      <Footer />
      <ZoomButtons />
    </>
  );
};

export default Layout;
