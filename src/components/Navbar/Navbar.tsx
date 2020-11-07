import React, { Component, ComponentType, ReactNode } from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Link,
  MenuItem,
  Select,
  Toolbar,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import {
  AccountCircle as AboutIcon,
  AlternateEmail as ContactIcon,
  Description as BlogIcon,
  Build as SkillIcon,
  Home as HomeIcon,
  Menu as MenuIcon,
  EmojiPeople as AcknowledgementsIcon,
  Work as WorkIcon,
} from '@material-ui/icons';
import { Link as GatsbyLink } from 'gatsby';
import { scroller } from 'react-scroll';
import { find, get, map } from 'lodash';
import { langMap } from '@i18n';
import { DarkModeToggle, HideOnScroll } from '@components';
import { icons } from '@images';
import socialLinks from '@data/socialLinks';
import useStyles from './Navbar.style';

interface MenuLinkItem {
  title: string;
  link: string;
  Icon: ComponentType;
}

interface Props extends WithStyles<typeof useStyles>, WithTranslation {
  homePage?: boolean;
}
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
        title: 'About',
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

  getPageLinks = (): MenuLinkItem[] => {
    return [
      {
        title: 'Home',
        link: '/',
        Icon: HomeIcon,
      },
      {
        title: 'Acknowledgements',
        link: 'acknowledgements',
        Icon: AcknowledgementsIcon,
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
    const { t } = this.props;
    const { title, link } = props;
    return (
      <Button onClick={() => this.handleScrollTo(link)}>
        {t(`SectionButtons.${title}`)}
      </Button>
    );
  };

  renderDesktopLinks = () => {
    const { homePage } = this.props;
    if (!homePage) return null;

    const DesktopLink = this.renderDesktopLink;

    return (
      <>
        {map(this.getDrawerButtons(), (link, i) => (
          <DesktopLink {...link} key={`desktop link ${i}`} />
        ))}
      </>
    );
  };

  renderDrawerLink = (props: MenuLinkItem) => {
    const { t } = this.props;
    const { title, link, Icon } = props;

    return (
      <Link component={GatsbyLink} to={link} color="inherit">
        <MenuItem>
          <IconButton disableRipple>
            <Icon />
          </IconButton>
          {t(`PageLinks.${title}`)}
        </MenuItem>
      </Link>
    );
  };

  renderHomePageLink = (props: MenuLinkItem) => {
    const { t } = this.props;
    const { title, link, Icon } = props;

    return (
      <MenuItem onClick={() => this.handleScrollTo(link)}>
        <IconButton disableRipple>
          <Icon />
        </IconButton>
        {t(`SectionButtons.${title}`)}
      </MenuItem>
    );
  };

  renderHomePageLinks = () => {
    const { homePage } = this.props;
    if (!homePage) return null;

    const HomePageLink = this.renderHomePageLink;

    return (
      <>
        {map(this.getDrawerButtons(), (link, i) => (
          <HomePageLink {...link} key={`drawer link ${i}`} />
        ))}
        <Divider />
      </>
    );
  };

  renderDrawerMenu = () => {
    const { classes } = this.props;
    const LanguageMenu = this.renderLanguageMenu;
    const HomePageLinks = this.renderHomePageLinks;
    const DrawerLink = this.renderDrawerLink;

    return (
      <Box display="flex" flexDirection="column" className={classes.grow}>
        <Box className={classes.drawerContainer}>
          <Box className={classes.drawerLogoContainer}>
            <img src={icons.main} className={classes.drawerLogo} />
          </Box>
          <Divider />
          <LanguageMenu />
          <Divider />
          <HomePageLinks />
          {map(this.getPageLinks(), (link, i) => (
            <DrawerLink {...link} key={`page link ${i}`} />
          ))}
          <Divider />
        </Box>
        <Box className={classes.drawerFooter}>
          {map(socialLinks, (social, i) => {
            const { url, Icon } = social;
            return (
              <Link
                key={`footer social ${i}`}
                href={url}
                className={classes.socialLink}
              >
                <Icon size={26} />
              </Link>
            );
          })}
        </Box>
      </Box>
    );
  };

  render() {
    const { classes } = this.props;

    const LanguageMenu = this.renderLanguageMenu;
    const DrawerMenu = this.renderDrawerMenu;
    const DesktopLinks = this.renderDesktopLinks;

    return (
      <>
        <HideOnScroll>
          <AppBar>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                aria-label="open drawer"
                onClick={this.handleDrawerMenuOpen}
              >
                <MenuIcon />
              </IconButton>

              <Box className={classes.grow} />

              <Box className={classes.sectionDesktop}>
                <LanguageMenu />
                <DesktopLinks />
              </Box>
              <DarkModeToggle />
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
