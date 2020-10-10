import React, { ReactNode } from 'react';
import { Box } from '@material-ui/core';
import { Navbar } from '@components';
import Footer from './Subcomponents/Footer';
import '@assets/css/styles.scss';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <Box component="main">
        {children}
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
