import React, { ReactNode } from 'react';
import Footer from './Subcomponents/Footer';
import Navbar from './Subcomponents/Navbar';
import '@assets/css/main.scss';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
