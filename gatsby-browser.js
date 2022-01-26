import { ContextProvider } from '@context';
import { CacheProvider } from '@emotion/react';
import React from 'react';

import { makeMuiCache } from './src/theme/cache';

const cache = makeMuiCache();

export const wrapRootElement = ({ element }) => (
  <ContextProvider>
    <CacheProvider value={cache}>{element}</CacheProvider>
  </ContextProvider>
);
