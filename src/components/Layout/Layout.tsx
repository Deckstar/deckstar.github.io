import '@assets/css/styles.scss';

import { Navbar, ZoomToTopButton } from '@components';
import { Box } from '@material-ui/core';
import React, { ReactNode } from 'react';

import Footer from './Subcomponents/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Box component="main">{children}</Box>
      <Footer />
      <ZoomToTopButton />
    </>
  );
};

export default Layout;
