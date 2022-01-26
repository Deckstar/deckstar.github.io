import '@assets/css/styles.scss';

import { Navbar, ZoomButtons } from '@components';
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
      <main className={classes.main}>{children}</main>
      <Footer />
      <ZoomButtons />
    </>
  );
};

export default Layout;
