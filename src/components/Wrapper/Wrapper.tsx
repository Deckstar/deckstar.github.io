import React, { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import I18n from '@i18n';
import { Layout, Theme } from '@components';

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <I18nextProvider i18n={I18n}>
      <HelmetProvider>
        <Theme>
          <Layout>{children}</Layout>
        </Theme>
      </HelmetProvider>
    </I18nextProvider>
  );
};

export default Wrapper;
