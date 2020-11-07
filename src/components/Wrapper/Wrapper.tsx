import React, { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import I18n from '@i18n';
import { Layout } from '@components';
import { ThemeWrapper } from '@theme';

interface WrapperProps {
  children: ReactNode;
  homePage?: boolean;
}

const Wrapper = ({ children, ...rest }: WrapperProps) => {
  return (
    <HelmetProvider>
      <I18nextProvider i18n={I18n}>
        <ThemeWrapper>
          <Layout {...rest}>{children}</Layout>
        </ThemeWrapper>
      </I18nextProvider>
    </HelmetProvider>
  );
};

export default Wrapper;
