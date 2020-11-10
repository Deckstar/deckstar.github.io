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
import { SelectInputProps } from '@material-ui/core/Select/SelectInput';
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
import langMap from '@i18n/utils/langMap';
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
  langValue: Language;
}

class Navbar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      drawerOpen: false,
      langValue: langMap[0],
    };
  }

  componentDidUpdate = (prevProps: Props, prevState: State) => {
    const newLangCode = this.props.i18n?.language.substring(0, 2);
    const oldState = prevState.langValue?.code;
    const stateShouldUpdate = newLangCode !== oldState && !!newLangCode;

    if (stateShouldUpdate) {
      const newLanguage =
        find(langMap, (lang) => lang.code === newLangCode) || langMap[0];
      this.setState({ langValue: newLanguage });
    }
  };

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

  handleChangeLanguage = (
    event: React.ChangeEvent<{ value: Language['code'] }>
  ) => {
    const { i18n } = this.props;
    const newCode = get(event, 'target.value', langMap[0].code);

    if (i18n) {
      i18n.changeLanguage(newCode);
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

  renderSelectedFlag = (value: any): ReactNode => {
    const { langValue } = this.state;
    if (!langValue || !value) return null;

    const { flag, code } = langValue;
    return (
      <IconButton color="inherit">
        <img src={flag} alt={`${code} flag`} style={{ height: 24 }} />
      </IconButton>
    );
  };

  renderLanguageInputComponent = () => {
    return null;
  };

  renderLanguageMenu = () => {
    const { classes } = this.props;
    const FlagChoice = this.renderFlagChoice;

    return (
      <Select
        value={this.state.langValue?.code || ''}
        onChange={this.handleChangeLanguage as SelectInputProps['onChange']}
        disableUnderline
        IconComponent={this.renderLanguageInputComponent}
        inputProps={{ name: 'language' }}
        classes={{ select: classes.languageSelect }}
        renderValue={this.renderSelectedFlag}
      >
        {map(langMap, (lang) => (
          <MenuItem value={lang.code} key={`language ${lang.code}`}>
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
                <DesktopLinks />
              </Box>
              <LanguageMenu />
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
