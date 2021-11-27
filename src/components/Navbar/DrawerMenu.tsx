import socialLinks from '@data/socialLinks';
import { useRouter } from '@hooks/useRouter';
import { icons } from '@images';
import {
  AccountCircle as AboutIcon,
  AlternateEmail as ContactIcon,
  Build as SkillIcon,
  Description as BlogIcon,
  EmojiPeople as AcknowledgementsIcon,
  Home as HomeIcon,
  Work as WorkIcon,
} from '@mui/icons-material';
import { Box, Divider, IconButton, Link, MenuItem } from '@mui/material';
import {
  Link as GatsbyLink,
  useTranslation,
} from 'gatsby-plugin-react-i18next';
import { map } from 'lodash';
import React, { ComponentType } from 'react';

import { handleScrollTo } from './DesktopSectionButtons';
import useStyles from './Navbar.style';

interface MenuItemType {
  title: string;
  Icon: ComponentType;
}

interface MenuLinkItem extends MenuItemType {
  link: string;
}
export interface MenuSectionItem extends MenuItemType {
  id: string;
}

export const DRAWER_BUTTONS: MenuSectionItem[] = [
  {
    title: 'About',
    id: 'about',
    Icon: AboutIcon,
  },
  {
    title: 'Skills',
    id: 'skills',
    Icon: SkillIcon,
  },
  {
    title: 'Experience',
    id: 'experience',
    Icon: WorkIcon,
  },
  {
    title: 'Blog',
    id: 'blog',
    Icon: BlogIcon,
  },
  {
    title: 'Contact',
    id: 'contact',
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
    link: '/acknowledgements',
    Icon: AcknowledgementsIcon,
  },
];

const DrawerLink = (props: MenuLinkItem) => {
  const { title, link, Icon } = props;

  const { t } = useTranslation();

  return (
    <Link component={GatsbyLink} to={link} color="inherit">
      <MenuItem>
        <IconButton disableRipple size="large">
          <Icon />
        </IconButton>
        {t(`PageLinks.${title}`)}
      </MenuItem>
    </Link>
  );
};

const HomePageSectionButton = (props: MenuSectionItem) => {
  const { title, id, Icon } = props;

  const { t } = useTranslation();

  return (
    <MenuItem onClick={() => handleScrollTo(id)}>
      <IconButton disableRipple size="large">
        <Icon />
      </IconButton>
      {t(`SectionButtons.${title}`)}
    </MenuItem>
  );
};

const HomePageSectionButtons = () => {
  const { route } = useRouter();

  const isHomePage = route === '/';

  if (!isHomePage) {
    return null;
  }

  return (
    <>
      {map(DRAWER_BUTTONS, (section, i) => (
        <HomePageSectionButton {...section} key={`drawer link ${i}`} />
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

        <HomePageSectionButtons />

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
