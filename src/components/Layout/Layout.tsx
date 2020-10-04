import React, { ReactNode } from 'react';
import Footer from './Subcomponents/Footer';
import Navbar from './Subcomponents/Navbar';
import '@assets/css/styles.scss';
import { Box } from '@material-ui/core';
// import '@assets/css/main.scss';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box component="main">
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
