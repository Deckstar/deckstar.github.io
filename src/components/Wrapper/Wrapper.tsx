import React, { ReactNode } from 'react';
import { Layout, Theme, Translation } from '@components';
import { HelmetProvider } from 'react-helmet-async';

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Translation>
      <HelmetProvider>
        <Theme>
          <Layout>{children}</Layout>
        </Theme>
      </HelmetProvider>
    </Translation>
  );
};

export default Wrapper;
