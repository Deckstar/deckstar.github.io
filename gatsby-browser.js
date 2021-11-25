import { ContextProvider } from '@context';
import React from 'react';

export const wrapRootElement = ({ element }) => (
  <ContextProvider>{element}</ContextProvider>
);
