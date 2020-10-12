import React, { Component, ComponentType, ReactNode } from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  MenuItem,
  Select,
  StyledComponentProps,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';
import {
  AccountCircle as AboutIcon,
  AlternateEmail as ContactIcon,
  Description as BlogIcon,
  Build as SkillIcon,
  Home as HomeIcon,
  Menu as MenuIcon,
  Work as WorkIcon,
} from '@material-ui/icons';
import { scroller } from 'react-scroll';
import { langMap } from '@i18n';
import { HideOnScroll } from '@components';
import { find, get, map } from 'lodash';
import useStyles from './Navbar.style';
import { backgrounds, photos } from '@images';

interface MenuLinkItem {
  title: string;
  link: string;
  Icon: ComponentType;
}

interface Props extends StyledComponentProps, WithTranslation {}
interface State {
  drawerOpen: boolean;
  langValue: Language | undefined;
}

class Navbar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      drawerOpen: false,
      langValue: find(
        langMap,
        (lang) => lang.code === (props.i18n.language.substring(0, 2) || 'en')
      ),
    };
  }

  getDrawerButtons = (): MenuLinkItem[] => {
    return [
      {
        title: 'Home',
        link: 'banner',
        Icon: HomeIcon,
      },
      {
        title: 'About/CV',
        link: 'about',
        Icon: AboutIcon,
      },
      {
        title: 'Skills',
        link: 'skills',
        Icon: SkillIcon,
      },
      {
        title: 'Experience',
        link: 'experience',
        Icon: WorkIcon,
      },
      {
        title: 'Blog',
        link: 'blog',
        Icon: BlogIcon,
      },
      {
        title: 'Contact',
        link: 'contact',
        Icon: ContactIcon,
      },
    ];
  };

  handleDrawerMenuClose = () => {
    this.setState({ drawerOpen: false });
  };

  handleDrawerMenuOpen = () => {
    this.setState({ drawerOpen: true });
  };

  handleChangeLanguage = (event: React.ChangeEvent<{ value: Language }>) => {
    const { i18n } = this.props;
    const value = get(event, 'target.value', langMap[0]);

    if (i18n) {
      i18n.changeLanguage(value.code);

      this.setState({ langValue: value });
    }
  };

  handleScrollTo = (id: string) =>
    scroller.scrollTo(id, {
      offset: -50, // so navbar doesn't block view
      duration: 600,
      smooth: true,
    });

  renderFlagChoice = (props: Language) => {
    const { code, label, flag } = props;

    return (
      <>
        <IconButton disabled color="inherit">
          <img src={flag} alt={`${code} flag`} style={{ height: 24 }} />
        </IconButton>
        {label}
      </>
    );
  };

  renderLanguageMenu = () => {
    const FlagChoice = this.renderFlagChoice;

    return (
      <Select
        value={this.state.langValue}
        onChange={(e: any) => this.handleChangeLanguage(e)}
        disableUnderline
        inputProps={{
          name: 'language',
        }}
        renderValue={(value: any): ReactNode => (
          <Box
            component="span"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <FlagChoice {...value} />
          </Box>
        )}
      >
        {map(langMap, (lang) => (
          <MenuItem component="span" value={lang} key={`language ${lang.code}`}>
            <FlagChoice {...lang} />
          </MenuItem>
        ))}
      </Select>
    );
  };

  renderDesktopLink = (props: MenuLinkItem) => {
    const { title, link } = props;
    return <Button onClick={() => this.handleScrollTo(link)}>{title}</Button>;
  };

  renderDrawerLink = (props: MenuLinkItem) => {
    const { title, link, Icon } = props;

    return (
      <MenuItem onClick={() => this.handleScrollTo(link)}>
        <IconButton disableRipple>
          <Icon />
        </IconButton>
        {title}
      </MenuItem>
    );
  };

  renderDrawerMenu = () => {
    const LanguageMenu = this.renderLanguageMenu;
    const DrawerLink = this.renderDrawerLink;

    return (
      <Box display="flex" flexDirection="column">
        {/* To be replaced by logo */}
        <Typography
          variant="h4"
          style={{ fontWeight: 'bold', padding: '1rem 0', textAlign: 'center' }}
        >
          Portfolio
        </Typography>
        <Divider />
        <LanguageMenu />
        <Divider />
        {map(this.getDrawerButtons(), (link, i) => (
          <DrawerLink {...link} key={`drawer link ${i}`} />
        ))}
        <Divider />
      </Box>
    );
  };

  render() {
    const { classes } = this.props;

    const LanguageMenu = this.renderLanguageMenu;
    const DrawerMenu = this.renderDrawerMenu;
    const DesktopLink = this.renderDesktopLink;

    return (
      <>
        <HideOnScroll>
          <AppBar>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes?.menuButton}
                aria-label="open drawer"
                onClick={this.handleDrawerMenuOpen}
              >
                <MenuIcon />
              </IconButton>

              <Box className={classes?.grow} />

              <Box className={classes?.sectionDesktop}>
                <LanguageMenu />
                {map(this.getDrawerButtons(), (link, i) => (
                  <DesktopLink {...link} key={`desktop link ${i}`} />
                ))}
              </Box>
            </Toolbar>
          </AppBar>
        </HideOnScroll>

        <Drawer
          open={this.state.drawerOpen}
          onClose={this.handleDrawerMenuClose}
        >
          <DrawerMenu />
        </Drawer>
      </>
    );
  }
}

export default withTranslation()(withStyles(useStyles)(Navbar));
