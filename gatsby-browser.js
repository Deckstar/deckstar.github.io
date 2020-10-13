import React from 'react';
import { ContextProvider } from '@context';

export const wrapRootElement = ({ element }) => (
  <ContextProvider>{element}</ContextProvider>
);
