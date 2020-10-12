import React, { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import I18n from '@i18n';
import { Layout } from '@components';
import { ThemeWrapper } from '@theme';

const Wrapper = ({ children, ...rest }: { children: ReactNode }) => {
  return (
    <I18nextProvider i18n={I18n}>
      <HelmetProvider>
        <ThemeWrapper>
          <Layout {...rest}>{children}</Layout>
        </ThemeWrapper>
      </HelmetProvider>
    </I18nextProvider>
  );
};

export default Wrapper;
