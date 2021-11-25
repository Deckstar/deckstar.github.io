import React, { ComponentType } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Box, Divider, IconButton, Link, MenuItem } from '@material-ui/core';
import {
  AccountCircle as AboutIcon,
  AlternateEmail as ContactIcon,
  Description as BlogIcon,
  Build as SkillIcon,
  Home as HomeIcon,
  EmojiPeople as AcknowledgementsIcon,
  Work as WorkIcon,
} from '@material-ui/icons';
import { Link as GatsbyLink } from 'gatsby-plugin-react-i18next';
import { map } from 'lodash';
import { icons } from '@images';
import socialLinks from '@data/socialLinks';
import useStyles from './Navbar.style';
import { handleScrollTo } from './DesktopLinks';
import { globalHistory } from '@reach/router';

export interface MenuLinkItem {
  title: string;
  link: string;
  Icon: ComponentType;
}

export const DRAWER_BUTTONS: MenuLinkItem[] = [
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

const PAGE_LINKS: MenuLinkItem[] = [
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

const DrawerLink = (props: MenuLinkItem) => {
  const { title, link, Icon } = props;

  const { t } = useTranslation();

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

  const { t } = useTranslation();

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
  const path = globalHistory.location.pathname;

  const isHomePage = path === '/';

  if (!isHomePage) {
    return null;
  }

  return (
    <>
      {map(DRAWER_BUTTONS, (link, i) => (
        <HomePageLink {...link} key={`drawer link ${i}`} />
      ))}
      <Divider />
    </>
  );
};

const DrawerMenu = () => {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" className={classes.grow}>
      <Box className={classes.drawerContainer}>
        <Box className={classes.drawerLogoContainer}>
          <img src={icons.main} className={classes.drawerLogo} />
        </Box>
        <Divider />
        <HomePageLinks />
        {map(PAGE_LINKS, (link, i) => (
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

export default DrawerMenu;
