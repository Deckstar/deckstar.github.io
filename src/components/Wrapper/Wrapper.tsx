import { Layout } from '@components';
import { ThemeWrapper } from '@theme';
import React, { FC } from 'react';
import { HelmetProvider } from 'react-helmet-async';

const Wrapper: FC = ({ children }) => {
  return (
    <HelmetProvider>
      <ThemeWrapper>
        <Layout>{children}</Layout>
      </ThemeWrapper>
    </HelmetProvider>
  );
};

export default Wrapper;
