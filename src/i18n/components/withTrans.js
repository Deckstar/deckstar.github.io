/*
made using https://medium.com/@makerspirit/step-by-step-guide-to-use-i18next-in-gatsby-app-19d21f2b723d
*/
import React, { Component } from 'react';
import i18next from '@i18n';
import { I18nextProvider, withTranslation } from 'react-i18next';

const withTrans = (WrappedComponent) => {
  WrappedComponent = withTranslation()(WrappedComponent);

  return class extends Component {
    render() {
      return (
        <I18nextProvider i18n={i18next}>
          <WrappedComponent {...this.props} language={i18next.language} />
        </I18nextProvider>
      );
    }
  };
};
export default withTrans;
