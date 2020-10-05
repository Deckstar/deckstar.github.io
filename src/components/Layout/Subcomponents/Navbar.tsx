import React, { ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Select,
  Toolbar,
} from '@material-ui/core';
import {
  AccountCircle as AboutIcon,
  AlternateEmail as ContactIcon,
  Build as SkillIcon,
  Home as HomeIcon,
  Menu as MenuIcon,
  MoreVert as MoreIcon,
} from '@material-ui/icons';
import { find, get, map } from 'lodash';
import { langMap } from '@i18n';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  })
);

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const [langValue, setLangValue] = useState(
    find(
      langMap,
      (lang) => lang.code === (i18n.language.substring(0, 2) || 'en')
    )
  );

  const handleChange = (event: React.ChangeEvent<{ value: Language }>) => {
    const value = get(event, 'target.value', langMap[0]);

    i18n.changeLanguage(value.code);

    setLangValue(value);
  };

  const LanguageMenu = () => (
    <Select
      value={langValue}
      onChange={(e) => handleChange(e)}
      disableUnderline
      inputProps={{
        name: 'language',
      }}
      renderValue={(value: Language): ReactNode => {
        return (
          <MenuItem>
            <img
              src={value.flag}
              alt="Language flag"
              style={{ height: '1.5em', marginRight: '1em' }}
            />
            {value.label}
          </MenuItem>
        );
      }}
    >
      {map(langMap, (lang) => (
        <MenuItem value={lang} key={`language ${lang.code}`}>
          <img
            src={lang.flag}
            alt="Language flag"
            style={{ height: '1.5em', marginRight: '1em' }}
          />
          {lang.label}
        </MenuItem>
      ))}
    </Select>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const MobileMenu = () => (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <LanguageMenu />
      <Link color="inherit" href="#">
        <MenuItem>
          <IconButton
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <HomeIcon />
          </IconButton>
          Home
        </MenuItem>
      </Link>
      <Link color="inherit" href="#about">
        <MenuItem>
          <IconButton color="inherit">
            <AboutIcon />
          </IconButton>
          About/CV
        </MenuItem>
      </Link>
      <Link color="inherit" href="#skills">
        <MenuItem>
          <IconButton
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <SkillIcon />
          </IconButton>
          Skills
        </MenuItem>
      </Link>
      <Link color="inherit" href="#education">
        <MenuItem>
          <IconButton
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AboutIcon />
          </IconButton>
          Education
        </MenuItem>
      </Link>
      <Link color="inherit" href="#contact">
        <MenuItem>
          <IconButton
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <ContactIcon />
          </IconButton>
          Contact
        </MenuItem>
      </Link>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <LanguageMenu />
            <Button>
              <Link color="inherit" href="#">
                Home
              </Link>
            </Button>
            <Button>
              <Link color="inherit" href="#about">
                About/CV
              </Link>
            </Button>
            <Button>
              <Link color="inherit" href="#skills">
                Skills
              </Link>
            </Button>
            <Button>
              <Link color="inherit" href="#education">
                Education
              </Link>
            </Button>
            <Button>
              <Link color="inherit" href="#contact">
                Contact
              </Link>
            </Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <MobileMenu />
    </div>
  );
};

export default Navbar;
