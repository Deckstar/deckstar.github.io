import { langMap } from '@utils/languages';
import React, { createContext, Dispatch, FC } from 'react';

import { NavbarState } from './Navbar';

type NavbarContextType = [
  state: NavbarState,
  setState: Dispatch<Partial<NavbarState>>
];

export const NavbarContext = createContext<NavbarContextType>([
  {
    drawerOpen: false,
    langValue: langMap[0],
  },
  () => null,
]);

type Props = {
  value: NavbarContextType;
};

export const NavbarContextProvider: FC<Props> = (props) => {
  const { children, value } = props;

  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  );
};
