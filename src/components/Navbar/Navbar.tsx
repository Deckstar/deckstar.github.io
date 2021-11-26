import { DarkModeToggle, HideOnScroll } from '@components';
import { useLocalState } from '@hooks/useLocalState';
import { AppBar, Box, Drawer, IconButton, Toolbar } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import React from 'react';

import { NavbarContextProvider } from './Context';
import DesktopLinks from './DesktopLinks';
import DrawerMenu from './DrawerMenu';
import LanguageMenu from './LanguageMenu';
import useStyles from './Navbar.style';

export interface NavbarState {
  drawerOpen: boolean;
}

const Navbar = () => {
  const classes = useStyles();

  const localState = useLocalState<NavbarState>({
    drawerOpen: false,
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
