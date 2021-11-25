import React, { ComponentType, ReactNode } from 'react';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
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
import { Link as GatsbyLink } from 'gatsby-plugin-react-i18next';
import { scroller } from 'react-scroll';
import { get, map } from 'lodash';
import langMap from '@i18n/utils/langMap';
import { DarkModeToggle, HideOnScroll } from '@components';
import { icons } from '@images';
import socialLinks from '@data/socialLinks';
import useStyles from './Navbar.style';
import { useLocalState } from '@hooks/useLocalState';

interface MenuLinkItem {
  title: string;
  link: string;
  Icon: ComponentType;
}

interface Props {
  homePage?: boolean;
}
interface State {
  drawerOpen: boolean;
  langValue: Language;
}

const Navbar = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { changeLanguage } = useI18next();

  const [state, setState] = useLocalState<State>({
    drawerOpen: false,
    langValue: langMap[0],
  });

  const getDrawerButtons = (): MenuLinkItem[] => {
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

  const getPageLinks = (): MenuLinkItem[] => {
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

  const handleDrawerMenuClose = () => {
    setState({ drawerOpen: false });
  };

  const handleDrawerMenuOpen = () => {
    setState({ drawerOpen: true });
  };

  const handleChangeLanguage = (
    event: React.ChangeEvent<{ value: Language['code'] }>
  ) => {
    const newCode = get(event, 'target.value', langMap[0].code);

    changeLanguage(newCode);
  };

  const handleScrollTo = (id: string) =>
    scroller.scrollTo(id, {
      offset: -50, // so navbar doesn't block view
      smooth: true,
    });

  const FlagChoice = (props: Language) => {
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

  const SelectedFlag = (value: any): ReactNode => {
    const { langValue } = state;
    if (!langValue || !value) return null;

    const { flag, code } = langValue;
    return (
      <IconButton color="inherit">
        <img src={flag} alt={`${code} flag`} style={{ height: 24 }} />
      </IconButton>
    );
  };

  const LanguageInputComponent = () => {
    return null;
  };

  const LanguageMenu = () => {
    return (
      <Select
        value={state.langValue?.code || ''}
        onChange={handleChangeLanguage as SelectInputProps['onChange']}
        disableUnderline
        IconComponent={LanguageInputComponent}
        inputProps={{ name: 'language' }}
        classes={{ select: classes.languageSelect }}
        renderValue={SelectedFlag}
      >
        {map(langMap, (lang) => (
          <MenuItem value={lang.code} key={`language ${lang.code}`}>
            <FlagChoice {...lang} />
          </MenuItem>
        ))}
      </Select>
    );
  };

  const DesktopLink = (props: MenuLinkItem) => {
    const { title, link } = props;
    return (
      <Button onClick={() => handleScrollTo(link)}>
        {t(`SectionButtons.${title}`)}
      </Button>
    );
  };

  const DesktopLinks = () => {
    const { homePage } = props;
    if (!homePage) return null;

    return (
      <>
        {map(getDrawerButtons(), (link, i) => (
          <DesktopLink {...link} key={`desktop link ${i}`} />
        ))}
      </>
    );
  };

  const DrawerLink = (props: MenuLinkItem) => {
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

  const HomePageLink = (props: MenuLinkItem) => {
    const { title, link, Icon } = props;

    return (
      <MenuItem onClick={() => handleScrollTo(link)}>
        <IconButton disableRipple>
          <Icon />
        </IconButton>
        {t(`SectionButtons.${title}`)}
      </MenuItem>
    );
  };

  const HomePageLinks = () => {
    const { homePage } = props;
    if (!homePage) return null;

    return (
      <>
        {map(getDrawerButtons(), (link, i) => (
          <HomePageLink {...link} key={`drawer link ${i}`} />
        ))}
        <Divider />
      </>
    );
  };

  const DrawerMenu = () => {
    return (
      <Box display="flex" flexDirection="column" className={classes.grow}>
        <Box className={classes.drawerContainer}>
          <Box className={classes.drawerLogoContainer}>
            <img src={icons.main} className={classes.drawerLogo} />
          </Box>
          <Divider />
          <HomePageLinks />
          {map(getPageLinks(), (link, i) => (
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

  return (
    <>
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
    </>
  );
};

export default Navbar;
