import React, { ReactNode, useContext } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import I18n from '@i18n';
import { Layout, LoadingScreen } from '@components';
import { Context } from '@context';
import { ThemeWrapper } from '@theme';
import { isNil } from 'lodash';

interface WrapperProps {
  children: ReactNode;
  homePage?: boolean;
}

const Wrapper = ({ children, ...rest }: WrapperProps) => {
  const { darkMode } = useContext(Context);
  return (
    <I18nextProvider i18n={I18n}>
      <HelmetProvider>
        {isNil(darkMode) || isNil(I18n.language) ? (
          <LoadingScreen />
        ) : (
          <ThemeWrapper>
            <Layout {...rest}>{children}</Layout>
          </ThemeWrapper>
        )}
      </HelmetProvider>
    </I18nextProvider>
  );
};

export default Wrapper;
