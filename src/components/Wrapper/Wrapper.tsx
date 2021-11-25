import React, { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from '@components';
import { ThemeWrapper } from '@theme';

interface WrapperProps {
  children: ReactNode;
  homePage?: boolean;
}

const Wrapper = ({ children, ...rest }: WrapperProps) => {
  return (
    <HelmetProvider>
      <ThemeWrapper>
        <Layout {...rest}>{children}</Layout>
      </ThemeWrapper>
    </HelmetProvider>
  );
};

export default Wrapper;
