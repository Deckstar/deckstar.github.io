import React from 'react';

import { AppBar, Box, Drawer, IconButton, Toolbar } from '@material-ui/core';

import { Menu as MenuIcon } from '@material-ui/icons';
import langMap from '@i18n/utils/langMap';
import { DarkModeToggle, HideOnScroll } from '@components';
import useStyles from './Navbar.style';
import { useLocalState } from '@hooks/useLocalState';
import DesktopLinks from './DesktopLinks';
import LanguageMenu from './LanguageMenu';
import DrawerMenu from './DrawerMenu';
import { NavbarContextProvider } from './Context';

export interface NavbarState {
  drawerOpen: boolean;
  langValue: Language;
}

const Navbar = () => {
  const classes = useStyles();

  const localState = useLocalState<NavbarState>({
    drawerOpen: false,
    langValue: langMap[0],
  });
  const [state, setState] = localState;

  const handleDrawerMenuClose = () => {
    setState({ drawerOpen: false });
  };

  const handleDrawerMenuOpen = () => {
    setState({ drawerOpen: true });
  };

  return (
    <NavbarContextProvider value={localState}>
      <HideOnScroll>
        <AppBar>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              aria-label="open drawer"
              onClick={handleDrawerMenuOpen}
            >
              <MenuIcon />
            </IconButton>

            <Box className={classes.grow} />

            <Box className={classes.sectionDesktop}>
              <DesktopLinks />
            </Box>
            <LanguageMenu />
            <DarkModeToggle />
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Drawer open={state.drawerOpen} onClose={handleDrawerMenuClose}>
        <DrawerMenu />
      </Drawer>
    </NavbarContextProvider>
  );
};

export default Navbar;
