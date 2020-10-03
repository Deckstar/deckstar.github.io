import React, { ReactNode } from 'react';
import { withTrans } from '@i18n';

const Translation = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default withTrans(Translation);
