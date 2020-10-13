import React, { ReactNode } from 'react';
import { Box } from '@material-ui/core';
import { Navbar, ZoomToTopButton } from '@components';
import Footer from './Subcomponents/Footer';
import '@assets/css/styles.scss';

interface LayoutProps {
  children: ReactNode;
  homePage?: boolean;
}

const Layout = ({ children, homePage }: LayoutProps) => {
  return (
    <>
      <Navbar homePage={homePage} />
      <Box component="main">{children}</Box>
      <Footer />
      <ZoomToTopButton />
    </>
  );
};

export default Layout;
