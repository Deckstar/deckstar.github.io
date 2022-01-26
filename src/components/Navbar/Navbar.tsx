import { HideOnScroll } from '@components';
import { useLocalState } from '@hooks/useLocalState';
import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Drawer, IconButton, Toolbar } from '@mui/material';
import React from 'react';

import { NavbarContextProvider } from './Context';
import DesktopSectionButtons from './DesktopSectionButtons';
import DrawerMenu from './DrawerMenu';
import LanguageMenu from './LanguageMenu';
import useStyles from './Navbar.style';

export interface NavbarState {
  drawerOpen: boolean;
}

const Navbar = () => {
  const { classes } = useStyles();

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
              size="large"
            >
              <MenuIcon />
            </IconButton>

            <div className={classes.grow} />

            <div className={classes.sectionDesktop}>
              <DesktopSectionButtons />
            </div>
            <LanguageMenu />
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
